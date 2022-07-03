import React from 'react'
import { MainOrderCard } from '../components/homepage/MainOrderCard'
import { Menu } from '../components/Menu/Menu'
import { ShowFoods } from '../components/ShowFoods/ShowFoods'
export const Home = () => {
  return (
    <div>

      <MainOrderCard />
      <ShowFoods />
      <Menu />
    </div>
  )
}
