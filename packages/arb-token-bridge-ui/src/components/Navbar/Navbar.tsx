'use client'
import Image from 'next/image'
import Link from 'next/link'
import { HeaderAccountPopover } from '../common/HeaderAccountPopover'

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 flex w-full flex-col items-start justify-between gap-4 border-b border-gray-400 bg-black px-3 pb-2 pt-4 sm:flex-row sm:items-center sm:px-5 sm:py-2">
      <div className="flex items-center justify-start gap-3  sm:gap-4">
        <Link href="https://alephzero.org">
          <Image
            src="/images/azeroLogo.svg"
            alt="Aleph Zero Logo"
            width={200}
            height={40}
            className="min-w-[140px] sm:w-[200px]"
          />
        </Link>
        <div className="h-3 w-[1px] bg-gray-600 md:h-4" />
        <h2 className="text-sm text-white sm:text-base">Bridge</h2>
      </div>
      <HeaderAccountPopover />
    </nav>
  )
}

export default Navbar
