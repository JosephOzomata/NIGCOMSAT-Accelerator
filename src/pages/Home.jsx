import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Launchpad from '../components/Launchpad'
import StepsTimeline from '../components/StepsTimeline'
import SwiperCarousel from '../components/SwiperCarousel'
import Alumini from '../components/Alumini'
import StepsTimeline2 from '../components/StepsTimeline2.0'


const Home = () => {
  return (
    <>
      <NavBar />
      <SwiperCarousel className="w-full h-screen" />
      {/* <StepsTimeline /> */}
      <StepsTimeline2 />
      <Launchpad />
      <Alumini />
    </>
  )
}

export default Home



