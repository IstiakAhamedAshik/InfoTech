import React from 'react'
import './service.css'

const OneService = (props) => {
  const { img, name, details } = props.service

  return (
    <div className='serviceOne'>
      
      <div className='service-img'>
        <img src={img} alt='' srcset='' />
      </div>
      <div className='pb-2'>
        <h1 className='text-center font-bold text-xl mt-4'>{name}</h1>
        <p className='text-slate-500 mt-4'>{details}</p>
      </div>
    </div>
  )
}

export default OneService
