import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Navbar = () => {
  return (
    <nav className=" flexBetween max-container padding-container relative z-300 py-5">
<Link href="/">
<Image src="/logo.png" alt ="logo" width={70} height={28} ></Image>

</Link>
    </nav>
  )
}

export default Navbar;
