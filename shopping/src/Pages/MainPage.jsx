import React from 'react'
import Header from '../Components/Header'
import Banner from '../Components/Banner'
import Collections from '../Components/Collections'
import Footer from '../Components/Footer'
import { useState } from 'react'
import { Gents } from '../Shoppingfolder/data'
import { Ladies } from '../Shoppingfolder/data'
import WomenCollecctions from '../Components/WomenCollecctions'

const MainPage = () => {
    console.log(Gents)
    const [gents,setgents]=useState(Gents)
    const [ladies,setladies]=useState(Ladies)
  return (
    <div>
      <Header/>
      <Banner/>
      <Collections gents={gents}/>
      <WomenCollecctions ladies={ladies}/>
      <Footer/>
    </div>
  )
}

export default MainPage
