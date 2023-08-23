import React from 'react'
import './allService.css'
const AllService = () => {
  return (
    <div>
      <h1 className='text-3xl text-blue-700 mb-5 mt-10 font-bold text-center font-serif'>
        All Services
      </h1>
      <div className='all-services'>
        <div className='service-all'>
          <h1 className='text-[22px] text-black font-bold'>
            Web Site Development
          </h1>
          <ul>
            <li>E-Commerce Site</li>
            <li>Personal Sites</li>
            <li>Affilite Sites</li>
            <li>Company Website</li>
            <li>Magazine & News Media</li>
            <li>Blog Site</li>
          </ul>
        </div>
        <div className='service-all'>
          <h1 className='text-[22px] text-black font-bold'>UI/UX Design</h1>
          <ul>
            <li>E-Commerce Design</li>
            <li>Personal Design</li>
            <li>Affilite Design</li>
            <li>Company Design</li>
          </ul>
        </div>
        <div className='service-all'>
          <h1 className='text-[22px] text-black font-bold'>
            Content And Research
          </h1>
          <ul>
            <li>Descriptive Research</li>
            <li>Correlational Research</li>
            <li>Causal-Comparative/Quasi-Experimental Research</li>
            <li> Experimental Research Research</li>
          </ul>
        </div>
        <div className='service-all'>
          <h1 className='text-[22px] text-black font-bold'>Graphics Designe</h1>
          <ul>
            <li>Visual identity graphic design.</li>
            <li>Marketing & advertising graphic design.</li>
            <li>User interface graphic design.</li>
            <li> Publication graphic design.</li>
            <li> Packaging graphic design.</li>
            <li> Motion graphic design.</li>
          </ul>
        </div>
        <div className='service-all videoedit'>
          <h1 className='text-[22px] text-black font-bold'>Video Editing</h1>
          <ul>
            <li>
              Rearranging, adding and/or removing sections of video clips and/or
              audio clips.
            </li>
            <li>Applying colour correction, filters and other enhancements</li>
            <li>Creating transitions between clips.</li>
          </ul>
        </div>
        <div className='service-all'>
          <h1 className='text-[22px] text-black font-bold'>
            Digital Marketing
          </h1>
          <ul>
            <li>Facebook Marketing</li>
            <li>Instagram Marketing</li>
            <li>Youtube Marketing</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AllService
