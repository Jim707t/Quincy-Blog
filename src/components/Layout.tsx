import React, { ReactNode } from 'react'
import Navbar from './header/Navbar'
import Footer from './footer/Footer'

export default function Layout( {children}: {children: ReactNode}) {
  return (
    <>
    <Navbar />
    {children}
    <Footer />
    </>
  )
}
