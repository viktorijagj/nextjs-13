import Link from 'next/link'
import React from 'react'

type Props = {}

function Navbar({}: Props) {


  return (
    <nav className='bg-gray-400 p-6 text-white font-bold uppercase '>
        <ul className='flex flex-row justify-evenly items-center p-3'>
            <li className='border-b-2 hover:text-green-300'><Link href='/'>Home</Link></li>
            <li className='border-b-2 hover:text-green-300'><Link href='/code/myrepos/'>My repositories</Link></li>
            <li className='border-b-2 hover:text-green-300'><Link href='/about'>About</Link></li>
            <li className='border-b-2 hover:text-green-300'><Link href='/about/team'>Team</Link></li>
            <li className='border-b-2 hover:text-green-300'><Link href='/contact'>Contact</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar