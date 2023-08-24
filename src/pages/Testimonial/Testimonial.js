import React from 'react'
import { Swiper, SwiperSlide, } from 'swiper/react'
import 'swiper/css'

import './testimonial.css'
import t1 from '../../assets/t1.png'
import t2 from '../../assets/t2.png'
import t3 from '../../assets/t3.png'
import t4 from '../../assets/t4.png'
const Testimonial = () => {
  const customers = [
    {
      img: t1,
      description:
        'Everyone at MD Infotech are such a pleasure to work for. There very accommodating as far as hours are concerned and work with you on a personal level.',
      Name: 'Jose J. Crosss',
    },
    {
      img: t2,
      description:
        'I been surprised with the turnaround from MD Infotech. Super professional & cooperative. True delighted to work with MD Infotech! The best Tech Company I found.',
      Name: 'Vanna Thomas',
    },
    {
      img: t3,
      description:
        'Great service...I did not have any ideas on how to get started and seller patiently worked with me through the whole process.',
      Name: 'Leroy P. King',
    },
    {
      img: t4,
      description:
        'They Did incredible work! Super fast. Easy to communicate with. Highly recommend and plan to use again in future.',
      Name: 'Hubert H. Henderson',
    },
  ]

  return (
    <div
      className=' mt-20px  testimonial-swiper testimonial-background-img'
      id='testimonial'
    >
      <h1 className='text-3xl text-blue-700 mb-5 font-bold text-center font-serif'>
        Testimonial
      </h1>
      <p className='text-center font-semibold text-blue-950'>
        We deliver the digital result you desire.
        <br /> For whom we have this platform, their comments about us
      </p>
      <div>
        <div className='mt-10 cursor-grabbing swiper-div'>
          <Swiper
            spaceBetween={50}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            breakpoints={{
              375: {
                slidesPerView: 1,
              },
              767: {
                slidesPerView: 1,
              },
              1200: {
                slidesPerView: 2,
              },
            }}
          >
            {customers.map((customer, i) => (
              <SwiperSlide key={i}>
                <div className='card bg-base-100 shadow-xl '>
                  <figure className=''>
                    <img
                      src={customer.img}
                      alt=''
                      className='rounded-xl w-[170px]'
                    />
                  </figure>
                  <div className='card-body pt-1 items-center text-center'>
                    <p className='text=xl w-[500px] h-[55px] text-justify swipe-para'>
                      {customer.description}
                    </p>
                    <div className='card-actions mt-6'>
                      <h2 className='font-bold'>{customer.Name}</h2>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
