import React from 'react'
import Navbar from "./../../components/navbar"
import Latest from '../../components/latest'
import Recomended from './../../components/recomended'
import Advertising from './../../components/Advertising'
import Footer from './../../components/Footer'
import Category from './../../components/category'

function Home() {
  return (
    <div>
      <Navbar/>
      <Latest/>
      <Recomended/>
      <Advertising />
      <Category/>
      <Footer />
    </div>
  )
}

export default Home