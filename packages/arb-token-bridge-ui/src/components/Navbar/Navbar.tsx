'use client'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 flex w-full items-center gap-3 border-b border-gray-400 bg-black p-3 md:gap-4 md:p-5">
      <Link href="https://alephzero.org">
        <Image
          src="/images/azeroLogo.svg"
          alt="Aleph Zero Logo"
          width={200}
          height={40}
          className="w-[140px] md:w-[200px]"
        />
      </Link>
      <div className="h-3 w-[1px] bg-gray-600 md:h-4" />
      <h2 className="text-sm text-white md:text-base">Bridge</h2>
    </nav>
  )
}

export default Navbar
