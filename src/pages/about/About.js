import React from 'react'
import Lottie from 'lottie-react'
import aboutimg from '../../assets/about1.png'
import finger from '../../assets/animation_llgfc786.json'
import './about.css'
const About = () => {
 
  return (
    <div className='flex justify-center items-center about-667'>
      <div className='about'>
        <img src={aboutimg} alt='' srcset='' className='about-img' />
      </div>
      <div className='about-details'>
        <h1 className='text-3xl text-blue-700 mb-5 font-bold'>About us</h1>
        <p className='text-xl text-justify about-info1'>
          MD Infotech is a cutting-edge IT business. It offers a wide range of
          IT services and products on a local and global level. We take note of
          your creative suggestions and implement them as you see fit. Our
          customer-centric services include web development, app development,
          artificial intelligence and robotics, eCommerce management, content
          creation, and many more. Our knowledgeable team always keeps up with
          new technology and helps other employees get ready for 4IR.
        </p>
        <div className='w-[100px] mt-7 finger'>
          <Lottie animationData={finger} height={10} width={10} />
        </div>
        <div className='mt-4 about-info'>
          <h1 className='font-bold text-xl'>MD Monjurul Morshed</h1>
          <p className='text-xl text-zinc-500'>
            Founder & Chief Executive officer
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
