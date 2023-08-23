import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './home.css'
import image0 from '../../assets/home-banner.webp'
import About from '../about/About'
import Service from './../service/Service'
import Embaded from './../embaded/Embaded'
import Chooseus from '../chooseUs/Chooseus'
import Worked from '../worked/Worked'
import Testimonial from '../Testimonial/Testimonial'
export default function Home() {
  return (
    <div>
      {' '}
      <div id='home' className='bg-indigo-600 home-b-img  md:h-[100vh]'>
        <div className='flex justify-center  home768'>
          <div className='details-768 lg:mt-28'>
            <h1 className='font-medium text-white'>Welcome to MD Infotech !</h1>
            <h1 className='text-5xl mt-4 text-white'>
              Hungry For Challenges <br />
              <span className='font-bold mt-3 text-white span-home'>
                Impact and More !
              </span>
            </h1>
            <p className='font-medium mt-4 text-white'>
              One of the pioneer ITES provider company.
            </p>
            <AnchorLink href='#service'>
              <button className='mt-10 home-btn'>Learn More</button>
            </AnchorLink>
          </div>
          <div className='pt-20 image-div'>
            <img src={image0} alt='' className='image0' />
          </div>
        </div>
      </div>
      <About />
      <Service></Service>
      <Embaded />
      <Chooseus />
      <Worked></Worked>
      <Testimonial></Testimonial>
    </div>
  )
}
