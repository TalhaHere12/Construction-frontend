import React from 'react'
import Header from '../../NewComp/Header/Header'
import Main from '../../NewComp/Main/Main'
import Services from '../../NewComp/Services/Service'
import Key from '../../NewComp/Key/Key'
import Project from '../../NewComp/Projects/Project'
import Map from '../../NewComp/Map/Map'
import Blog from '../../NewComp/Blog/Blog'
import Icon from '../../NewComp/Icons/Icon'
import Footer1 from '../../NewComp/Footer1/Footer1'
import Footer2 from '../../NewComp/Footer2/Footer2'
import Testimonial from '../../NewComp/Testimonials/Testimonial'

function Home() {
  return (
    <div>
        <Header/>
        <Main/>
        <Services/>
        <Key/>
        <Project/>
        <Map/>
        <Blog/>

        <Icon/>
        <Testimonial/>
        <Footer1/>
        <Footer2/>

    </div>
  )
}

export default Home