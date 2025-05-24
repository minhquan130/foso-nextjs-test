import React from 'react'
import TopHeader from './TopHeader'
import MainHeader from './MainHeader'
import MenuHeader from './MenuHeader'

export default function Header() {
  return (
    <header>
      <TopHeader />
      <div className='bg-white pb-4'>
        <MainHeader />
        <MenuHeader />
      </div>
    </header>
  )
}
