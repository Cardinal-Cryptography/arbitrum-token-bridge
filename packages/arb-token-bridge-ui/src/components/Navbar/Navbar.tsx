'use client'
import Image from 'next/image'
import Link from 'next/link'
import { HeaderAccountPopover } from '../common/HeaderAccountPopover'
import { useAccount } from 'wagmi'
import { HeaderConnectWalletButton } from '../common/HeaderConnectWalletButton'

const Navbar = () => {
  const { isConnected } = useAccount()

  return (
    <nav className="z-1 sticky top-0 flex w-full justify-between gap-4 border-b border-gray-400 bg-black px-3 py-2 sm:px-5">
      <div className="flex items-start gap-3 sm:items-center  sm:gap-4">
        <Link href="https://alephzero.org" className="flex h-8 items-center">
          <Image
            src="/images/azeroLogo.svg"
            alt="Aleph Zero Logo"
            width={200}
            height={40}
            className="my-3 min-w-[140px] sm:w-[200px]"
          />
        </Link>
        <div className="hidden h-3 w-[1px] bg-gray-600 sm:block md:h-4" />
        <h2 className="hidden text-sm text-white sm:block sm:text-base">
          Bridge
        </h2>
      </div>
      {isConnected ? <HeaderAccountPopover /> : <HeaderConnectWalletButton />}
    </nav>
  )
}

export default Navbar
