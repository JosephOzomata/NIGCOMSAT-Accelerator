import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Launchpad from '../components/Launchpad'
import StepsTimeline from '../components/StepsTimeline'
import SwiperCarousel from '../components/SwiperCarousel'

const Home = () => {
  return (
    <>
      <NavBar />
      <SwiperCarousel/>
      <StepsTimeline />
      <Launchpad />
      <Footer />
    </>
  )
}

export default Home



