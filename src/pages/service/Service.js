import React from 'react'
import uiux from '../../assets/uiux.png'
import webDevelopment from '../../assets/webdev.png'
import appDevelopment from '../../assets/Group 45.png'
import content from '../../assets/content and research.png'
import grapics from '../../assets/grapicsD.jpg'
import videoE from '../../assets/videoEdit.jpg'

import OneService from './OneService'
import './service.css'
import { Link } from 'react-router-dom'
const Service = () => {
  const services = [
    {
      img: uiux,
      name: 'UI/UX Design',
      details:
        'Our team of qualified UI/UX designers can answer your needs. It offers an extensive selection of services, such as designing UI/UX for Apps.',
    },
    {
      img: webDevelopment,
      name: 'Web Development',
      details:
        'Our client-centered & customer-focused services make your company intelligible to everyone.MD Infotechs web developers will ensure that.',
    },
    {
      img: appDevelopment,
      name: 'App Development',
      details:
        'We provide excellent App development services to launch your project across all devices. Contact our App specialists right away!',
    },
    {
      img: content,
      name: 'Content & Research',
      details:
        'Research is the foundation of each project & content is anything that incorporates all the data in great depth, Contact our specialists right away.',
    },
    {
      img: grapics,
      name: 'Grapics Designe',
      details:
        'Graphic design is a form of communication that uses colors, shapes, images, and words to create visual content that surrounds us in many forms—namely, print and digital media.',
    },
    {
      img: videoE,
      name: 'Video Editing',
      details:
        'The goal of video editing is to choose the best clips, create a cohesive flow, and add effects and we try to give the best video edit',
    },
  ]
  return (
    <div id='service' className='mt-28 service-background-img service1'>
      <h1 className='text-3xl text-blue-700 mb-5 font-bold text-center font-serif'>
        Our Services
      </h1>
      <div className='flex justify-center '>
        <div className='grid grid-cols-3 mt-10 gap-10 service-grid'>
          {services.map((service, i) => (
            <Link to='/allservice'>
              <OneService key={i} service={service}></OneService>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Service
