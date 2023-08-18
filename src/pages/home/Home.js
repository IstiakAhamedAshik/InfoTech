import React from 'react'
import './home.css'
import image0 from '../../assets/home-banner.webp'
export default function Home() {
  return (
    <div className='bg-indigo-600 home-b-img  md:h-[100vh]'>
      <div className='flex justify-center  home768'>
        <div className='details-768 lg:mt-28'>
          <h1 className='font-medium text-white'>Welcome to MD Infotech !</h1>
          <h1 className='text-6xl mt-4 text-white'>
            Hungry For Challenges <br />
            <span className='font-bold mt-3 text-white span-home'>Impact and More !</span>
          </h1>
          <p className='font-medium mt-4 text-white'>
            One of the pioneer ITES provider company.
          </p>
          <button className='mt-10 home-btn'>Learn More</button>
        </div>
        <div className='pt-20 image-div'>
          <img src={image0} alt='' className='image0' />
        </div>
      </div>
    </div>
  )
}
