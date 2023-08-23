import React from 'react'
import './embaded.css'
import embaddedbrain from '../../assets/embadedBrain.webp'
const Embaded = () => {
  return (
    <div className='flex justify-evenly items-center embaded-667 embaded-background-img mt-20 '>
      <div className='embaded-details'>
        <h1 className='text-xl text-violet-950 mb-5 font-medium'>
          EMBEDDED SYSTEMS{' '}
        </h1>
        <h1 className='text-3xl text-violet-950 mb-5 font-bold '>
          Computer Vision ,Developing ,Research
        </h1>
        <p className='text-xl text-justify  text-violet-950 embaded-info1'>
          Our goal is to promote the use of computer vision and AI to safeguard
          lives, goods, company and assets through proactive solutions. Our team
          is continuously looking for people who share our passion for enhancing
          living standards via AI-powered solutions.
        </p>
      </div>
      <div className='embaded-about ml-8'>
        <img
          src={embaddedbrain}
          alt=''
          srcset=''
          className='embaded-img rounded-xl'
        />
      </div>
    </div>
  )
}

export default Embaded
