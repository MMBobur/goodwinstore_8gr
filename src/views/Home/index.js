import React from 'react'

import Navbar from "./../../components/navbar"
import Advertising from './../../components/Advertising'
import Footer from './../../components/Footer'
import Category from './../../components/category'

function Home() {
  return (
    <div>
      <Navbar/>
      <Advertising />
      <Category/>
      <Footer />
    </div>
  )
}

export default Home