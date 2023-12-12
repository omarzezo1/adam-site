import React from 'react'
import MainSlider from '../../components/Home/MainSlider'
import OurProducts from '../../components/Home/OurProducts'
import Info from '../../components/Home/Info'
import Testimonials from '../../components/Home/Testimonials'
import Footer from '../../utilities/Footer'
import Navbar from '../../utilities/Navbar'


const Home = () => {
  return (
    <main>
        <Navbar/>
        <MainSlider/>
        <Info/>
        <OurProducts/>
        <Testimonials/>
        <Footer/>
    </main>
  )
}

export default Home