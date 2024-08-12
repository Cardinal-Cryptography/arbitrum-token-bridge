import { twMerge } from 'tailwind-merge'
import useLocalStorage from '@rehooks/local-storage'

import { statsLocalStorageKey } from '../MainContent/ArbitrumStats'
import { Switch } from './atoms/Switch'
import { SidePanel } from './SidePanel'
import { useArbQueryParams } from '../../hooks/useArbQueryParams'
import { TestnetToggle } from './TestnetToggle'

import { useIsTestnetMode } from '../../hooks/useIsTestnetMode'

const SectionTitle = ({
  className,
  children
}: {
  className?: string
  children: React.ReactNode
}) => (
  <div className={twMerge('heading mb-4 text-lg', className)}>{children}</div>
)

export const SettingsDialog = () => {
  const [isTestnetMode] = useIsTestnetMode()

  const [{ settingsOpen }, setQueryParams] = useArbQueryParams()

  const [isArbitrumStatsVisible, setIsArbitrumStatsVisible] =
    useLocalStorage<boolean>(statsLocalStorageKey)

  const openArbitrumStats = () => {
    setIsArbitrumStatsVisible(true)
  }

  const closeArbitrumStats = () => {
    setIsArbitrumStatsVisible(false)
  }

  function closeSettings() {
    setQueryParams({ settingsOpen: false })
  }

  return (
    <SidePanel
      isOpen={settingsOpen}
      heading="Settings"
      onClose={closeSettings}
      panelClassNameOverrides="lg:!w-[644px] !min-w-[350px]" // custom width
    >
      <div className="flex w-full flex-col items-center gap-6 text-white">
        {/* Arbitrum stats toggle */}
        <div className="w-full">
          <SectionTitle>Stats</SectionTitle>

          <Switch
            label="Show Network Stats"
            description="Live, nerdy stats about Ethereum and Arbitrum chains, like
        block number and current gas price."
            checked={!!isArbitrumStatsVisible}
            onChange={
              isArbitrumStatsVisible ? closeArbitrumStats : openArbitrumStats
            }
          />
        </div>

        {/* Show testnets toggle */}
        <div className="w-full">
          <SectionTitle>Developer Mode</SectionTitle>

          <TestnetToggle
            label="Turn on testnet mode"
            description="Show testnet networks and enable other testnet features."
          />
        </div>
      </div>
    </SidePanel>
  )
}
