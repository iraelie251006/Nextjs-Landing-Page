'use client'
import { useEffect } from "react"
import Hero from "./hero"
import AOS from 'aos'
import 'aos/dist/aos.css'
import EditedVideos from "./edited-videos"
import EditedShorts from "./edited-shorts"
import Channels from "./channels"
import Calendly from "./calendly"
import Footer from "./footer"
import { Particles } from "./particles"


const Landing = () => {
  useEffect(() => {
    AOS.init({
      // disable: "phone",
      duration: 800,
      easing: "ease-in-out-cubic",
    })
  })
  return (
    <div>
      <Particles className="absolute inset-0 -z-10"/>
        <div className="pt-32 pb-16 md:pt-52 md:pb-32 relative max-w-5xl 
        min-h-screen px-4 mx-auto sm:px-6 space-y-80">
            {/* Hero */}
            <Hero />
            {/* Edited videos */}
            <EditedVideos />
            {/* Edited shorts videos */}
            <EditedShorts />
            {/* Channels worked with */}
            <Channels />
            {/* Calendly booking page */}
            <Calendly />
        </div>
        {/* Footer */}
        <Footer />
    </div>
  )
}

export default Landing