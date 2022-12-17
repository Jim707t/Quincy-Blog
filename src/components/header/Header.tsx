import React from 'react'
import Navbar from './Navbar'

export default function Header() {
  return (
    <div className='flex items-center justify-center  bg-gray-100'>
    <header>
    <div className="py-4 px-4 text-center items-center" >
    <a href="/" className="text-xl font-bold text-gray-700 cursor-pointer"><img src="https://gateway.pinata.cloud/ipfs/QmNRvWSfgSFF28J95QZGJcxXNQaSEt53LtEc3TKtqSJS1X/Jim_Quincy_Logo_noir.jpg" className="m-auto h-20 w-30" alt="Jim Quincy" /></a>
    </div>
    <Navbar />
  </header>
  </div>
  )
}