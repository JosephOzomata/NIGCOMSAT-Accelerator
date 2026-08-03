import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Launchpad from '../components/Launchpad'
import StepsTimeline from '../components/StepsTimeline'
import SwiperCarousel from '../components/SwiperCarousel'
import StepsTimeline2 from '../components/StepsTimeline2.0'


const Home = () => {
  return (
    <>
      <NavBar />
      <SwiperCarousel/>
      {/* <StepsTimeline /> */}
      <StepsTimeline2 />
      <Launchpad />
    </>
  )
}

export default Home



