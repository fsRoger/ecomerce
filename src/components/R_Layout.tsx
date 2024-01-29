import React, { ReactElement } from 'react'
import Header from './Header/Header'
import BottomHeader from './BottomHeader/BottomHeader'
import Footer from './Footer/Footer'


interface Props {
  children: ReactElement
}
const R_Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <BottomHeader />
      {children}
      <Footer />
    </>
  )
}

export default R_Layout