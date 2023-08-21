import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaLocationArrow,
  FaPhone,
  FaEnvelope,
} from 'react-icons/fa'
const Footer = () => {
  return (
    <div className='mt-24 footer-background'>
      <footer className='footer p-10 footer-background text-base-content flex justify-evenly footer-display'>
        <div className='footer-head'>
          <h1 className='text-3xl font-bold ml-10 font-serif italic'>
            INFOTECH
          </h1>
          <p className='w-[350px] ml-8 text-[18px] mt-2 text-justify info-text'>
            If you have the Commitment & Desire to develop your business we have
            the experience and expertise to make it success!
          </p>
          <div className='flex mt-5 ml-6 footer-icon'>
            <Link>
              <FaFacebook className='w-[30px] h-[40px] ' />
            </Link>
            <Link>
              <FaLinkedin className='w-[37px] h-[37px] ml-8' />
            </Link>
            <Link>
              <FaInstagram className='w-[37px] h-[37px] ml-8' />
            </Link>
          </div>
        </div>
        <div className='provide'>
          <span className=' text-[25px] text-white font-bold'>Provide</span>
          <p className='text-[18px] mt-2 font-medium'>UI/UX Design</p>
          <p className='text-[18px] mt-2 font-medium'>Web Development</p>
          <p className='text-[18px] mt-2 font-medium'>App Development</p>
          <p className='text-[18px] mt-2 font-medium'>Content & Research</p>
          <p className='text-[18px] mt-2 font-medium'>Vedio Editing</p>
          <p className='text-[18px] mt-2 font-medium'>Grapics designe</p>
        </div>
        <div>
          <span className=' text-[25px] text-white font-bold'>
            Contact Info
          </span>
          <div className='mt-4 flex'>
            <p>
              <FaLocationArrow className='w-[30px] h-[35px] ' />
            </p>
            <p className='text-[18px] mt-2 font-medium ml-3'>
              Infotech, Dhaka, Mohammadpur
            </p>
          </div>
          <div className='mt-4 flex'>
            <p>
              <FaPhone className='w-[30px] h-[35px]' />
            </p>
            <p className='text-[18px] mt-2 font-medium  ml-3'>
              (+88) 01796481649
            </p>
          </div>
          <div className='mt-4 flex'>
            <p>
              <FaEnvelope className='w-[30px] h-[35px]' />
            </p>
            <p className='text-[18px] mt-2 font-medium  ml-3'>
              istiak1439@gmail.com
            </p>
          </div>
        </div>
      </footer>

      <div className='flex justify-evenly'>
        <hr className='footer-horijon text-center' />
      </div>
      <p className='text-center text-[20px] mt-3 pb-4'>
        AI Infotech @2023 - All Rights Reserved{' '}
      </p>
    </div>
  )
}

export default Footer
