import React from 'react'
import uiux from '../../assets/uiux.png'
import webDevelopment from '../../assets/webdev.png'
import appDevelopment from '../../assets/Group 45.png'
import content from '../../assets/content and research.png'
import OneService from './OneService'
import './service.css'
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
  ]
  return (
    <div className='mt-28 service-background-img'>
      <h1 className='text-3xl text-blue-700 mb-5 font-bold text-center'>
        Our Services
      </h1>
      <div className='flex justify-center '>
        <div className='grid grid-cols-2 mt-10 gap-10 service-grid'>
          {services.map((service, i) => (
            <OneService key={i} service={service}></OneService>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Service
