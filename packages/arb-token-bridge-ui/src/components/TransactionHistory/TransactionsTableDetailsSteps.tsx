import { ReactNode, useMemo } from 'react'
import dayjs from 'dayjs'
import { twMerge } from 'tailwind-merge'
import {
  ArrowTopRightOnSquareIcon,
  CheckCircleIcon,
  XCircleIcon
} from '@heroicons/react/24/outline'

import { DepositStatus, MergedTransaction } from '../../state/app/state'
import { getExplorerUrl, getNetworkName, isNetwork } from '../../util/networks'
import {
  getDestinationNetworkTxId,
  isTxClaimable,
  isTxCompleted,
  isTxExpired,
  isTxFailed,
  isTxPending
} from './helpers'
import { TransactionsTableRowAction } from './TransactionsTableRowAction'
import { ExternalLink } from '../common/ExternalLink'
import {
  WithdrawalCountdown,
  getTxConfirmationDate
} from '../common/WithdrawalCountdown'
import { DepositCountdown } from '../common/DepositCountdown'
import { useRemainingTime } from '../../state/cctpState'
import { isDepositReadyToRedeem } from '../../state/app/utils'
import { Address } from '../../util/AddressUtils'
import { isTeleport } from '@/token-bridge-sdk/teleport'
import {
  firstRetryableLegRequiresRedeem,
  secondRetryableLegForTeleportRequiresRedeem
} from '../../util/RetryableUtils'
import { TransactionsTableDetailsTeleporterSteps } from './TransactionsTableDetailsTeleporterSteps'
import { isTeleporterTransaction } from '../../hooks/useTransactions'

function getTransferDurationText(tx: MergedTransaction) {
  const { isTestnet, isOrbitChain } = isNetwork(tx.childChainId)

  if (tx.isCctp) {
    return isTestnet ? 'a minute' : '10 minutes'
  }

  if (!tx.isWithdrawal) {
    if (isOrbitChain && !isTeleport(tx)) {
      return 'a minute'
    }
    return isTestnet ? '10 minutes' : '15 minutes'
  }

  // withdrawals
  return getTxConfirmationDate({
    createdAt: dayjs(),
    withdrawalFromChainId: tx.childChainId
    // we set from to current time so that we get the full withdrawal confirmation time
  }).from(dayjs(), true)
}

function needsToClaimTransfer(tx: MergedTransaction) {
  return tx.isCctp || tx.isWithdrawal
}

export const Step = ({
  done = false,
  claimable = false,
  pending = false,
  failure = false,
  text,
  endItem = null,
  extendHeight = false
}: {
  done?: boolean
  claimable?: boolean
  pending?: boolean
  failure?: boolean
  text: React.ReactNode
  endItem?: ReactNode
  extendHeight?: boolean
}) => {
  // defaults to a step that hasn't been started yet
  let borderColorClassName = 'border-white/50'
  let iconClassName = 'text-white/50 shrink-0'
  let textColorClassName = 'text-white/50'

  if (done || claimable) {
    borderColorClassName = 'border-green-400'
    iconClassName = 'text-green-400 shrink-0'
    textColorClassName = 'text-white'
  }

  if (pending) {
    borderColorClassName = 'border-yellow-400'
    iconClassName = 'text-yellow-400 shrink-0'
    textColorClassName = 'text-white'
  }

  if (failure) {
    borderColorClassName = 'border-red-400'
    iconClassName = 'text-red-400 shrink-0'
    textColorClassName = 'text-white'
  }

  return (
    <div
      className={twMerge(
        'my-3 flex h-3 items-center justify-between space-x-2',
        pending && 'animate-pulse',
        extendHeight && 'h-auto items-start'
      )}
    >
      <div
        className={twMerge(
          'flex items-center space-x-3',
          extendHeight && 'items-start'
        )}
      >
        {done && <CheckCircleIcon className={iconClassName} height={18} />}
        {failure && <XCircleIcon className={iconClassName} height={18} />}
        {!done && !failure && (
          <div
            className={twMerge(
              'ml-[2px] h-[15px] w-[15px] shrink-0 rounded-full border',
              borderColorClassName
            )}
          />
        )}
        <span className={textColorClassName}>{text}</span>
      </div>
      {endItem}
    </div>
  )
}

const LastStepEndItem = ({
  tx,
  address
}: {
  tx: MergedTransaction
  address: Address | undefined
}) => {
  const destinationNetworkTxId = getDestinationNetworkTxId(tx)
  const destinationChainId = tx.isWithdrawal
    ? tx.parentChainId
    : tx.childChainId
  const isTeleportTx = isTeleport(tx) && isTeleporterTransaction(tx)

  if (destinationNetworkTxId) {
    return (
      <ExternalLink
        href={`${getExplorerUrl(
          destinationChainId
        )}/tx/${getDestinationNetworkTxId(tx)}`}
      >
        <ArrowTopRightOnSquareIcon height={12} />
      </ExternalLink>
    )
  }

  if (
    (!isTeleportTx && isDepositReadyToRedeem(tx)) ||
    (isTeleportTx && secondRetryableLegForTeleportRequiresRedeem(tx))
  ) {
    return (
      <TransactionsTableRowAction
        type="deposits"
        isError={true}
        tx={tx}
        address={address}
      />
    )
  }

  return null
}

export const TransactionFailedOnNetwork = ({
  networkName
}: {
  networkName: string
}) => (
  <div>
    Transaction failed on {networkName}. You have 7 days to try again. After
    that, your funds will be{' '}
    <span className="font-bold text-red-400">lost forever</span>.
  </div>
)

export const TransactionsTableDetailsSteps = ({
  tx,
  address
}: {
  tx: MergedTransaction
  address: Address | undefined
}) => {
  const { remainingTime: cctpRemainingTime } = useRemainingTime(tx)

  const { sourceChainId } = tx

  const sourceNetworkName = getNetworkName(sourceChainId)

  const isSourceChainDepositFailure =
    typeof tx.depositStatus !== 'undefined' &&
    [DepositStatus.CREATION_FAILED, DepositStatus.L1_FAILURE].includes(
      tx.depositStatus
    )

  const isTeleportTx = isTeleport(tx) && isTeleporterTransaction(tx)

  const isDestinationChainFailure = isTeleportTx
    ? secondRetryableLegForTeleportRequiresRedeem(tx)
    : !isSourceChainDepositFailure && isTxFailed(tx)

  const destinationChainTxText = useMemo(() => {
    const networkName = getNetworkName(tx.destinationChainId)
    const fundsArrivedText = `Funds arrived on ${networkName}`

    if (isTxExpired(tx)) {
      return `Transaction expired on ${networkName}`
    }
    if (isTeleportTx && firstRetryableLegRequiresRedeem(tx)) {
      return fundsArrivedText
    }

    if (isDepositReadyToRedeem(tx)) {
      return <TransactionFailedOnNetwork networkName={networkName} />
    }
    if (isDestinationChainFailure) {
      return `Transaction failed on ${networkName}.`
    }
    return fundsArrivedText
  }, [tx, isDestinationChainFailure, isTeleportTx])

  return (
    <div className="flex flex-col text-xs">
      {/* First step when transfer is initiated */}
      <Step
        done={!isSourceChainDepositFailure}
        failure={isSourceChainDepositFailure}
        text={
          isSourceChainDepositFailure
            ? `Transaction failed on ${sourceNetworkName}`
            : `Transaction initiated on ${sourceNetworkName}`
        }
        endItem={
          <ExternalLink href={`${getExplorerUrl(sourceChainId)}/tx/${tx.txId}`}>
            <ArrowTopRightOnSquareIcon height={12} />
          </ExternalLink>
        }
      />

      {/* Pending transfer showing the remaining time */}
      {!isTeleport(tx) && (
        <Step
          pending={isTxPending(tx)}
          done={!isTxPending(tx) && !isSourceChainDepositFailure}
          text={`Wait ~${getTransferDurationText(tx)}`}
          endItem={
            isTxPending(tx) && (
              <div>
                {tx.isCctp && <>{cctpRemainingTime}</>}
                {!tx.isCctp &&
                  (tx.isWithdrawal ? (
                    <WithdrawalCountdown tx={tx} />
                  ) : (
                    <DepositCountdown tx={tx} />
                  ))}
                <span> remaining</span>
              </div>
            )
          }
        />
      )}

      {isTeleport(tx) && isTeleporterTransaction(tx) && (
        <TransactionsTableDetailsTeleporterSteps tx={tx} address={address} />
      )}

      {/* If claiming is required we show this step */}
      {needsToClaimTransfer(tx) && (
        <Step
          done={isTxCompleted(tx)}
          claimable={isTxClaimable(tx)}
          text={`Claim ${tx.isWithdrawal ? 'withdrawal' : 'deposit'}`}
          endItem={
            isTxClaimable(tx) && (
              <TransactionsTableRowAction
                type={tx.isWithdrawal ? 'withdrawals' : 'deposits'}
                isError={false}
                tx={tx}
                address={address}
              />
            )
          }
        />
      )}

      {/* The final step, showing the destination chain */}
      <Step
        done={isTxCompleted(tx)}
        failure={isTxExpired(tx) || isDestinationChainFailure}
        text={destinationChainTxText}
        endItem={<LastStepEndItem tx={tx} address={address} />}
      />
    </div>
  )
}
