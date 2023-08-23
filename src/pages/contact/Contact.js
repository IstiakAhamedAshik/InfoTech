import React from 'react'
import { Link } from 'react-router-dom'
import './contact.css'

import contactimg from '../../assets/contact.webp'
const Contact = () => {
  return (
    <div className='contact'>
      <div className='contact-background-img'>
        <h1 className='text-3xl text-blue-700 mb-5 font-bold text-center pt-10 font-serif'>
          Contact
        </h1>
        <p className='text-[20px] font-medium text-center mb-10'>
          We are ready to hear from you about anything.Your complaint,
          suggestion,compliment,or queries issues
        </p>
      </div>
      <div className='w-[1300px] contact-div'>
        <div className='all-contact'>
          <div className='contact-details'>
            <div className='contact-info'>
              <img src={contactimg} className=' w-[150px]' alt='' srcset='' />
              <div className='contact-p'>
                <p className='font-semibold'>
                  Knock us via the contact form for any purpose. We will be in
                  touch within one business day.
                </p>
              </div>
            </div>
            <div className='contact-maph mt-8'>
              <p className='text-lg font-bold text-blue-700'>
                Email : <br />{' '}
                <span className='font-semibold text-black'>
                  istiak1439@gmail.com
                </span>
              </p>
              <p className='text-lg font-bold text-blue-700 mt-6'>
                Phone : <br />{' '}
                <span className='font-semibold  text-black'>
                  (+88)01796481649
                </span>
              </p>
              <p className='text-lg font-bold text-blue-700 mt-6'>
                Location : <br />{' '}
                <span className='font-semibold  text-black'>
                  Dhaka, Mohammadpur
                </span>
              </p>
              <div className='button mt-7'>
                <Link>
                  {' '}
                  <button type='button' className=' btn-f'>
                    Facebook
                  </button>
                </Link>
                <Link>
                  {' '}
                  <button type='button' className=' ml-4 btn-l'>
                    Linkedin
                  </button>
                </Link>
                <Link>
                  <button type='button' className=' ml-4 btn-i'>
                    Instagram
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className='contact-field'>
            <form action=''>
              <input
                type='text'
                placeholder='Your Name'
                className='input input-bordered input-primary'
              />
              <input
                type='text'
                placeholder='Your Email'
                className='input input-bordered input-primary'
              />
              <input
                type='text'
                placeholder='Your Phone Num'
                className='input input-bordered input-primary'
              />
              <input
                type='text'
                placeholder='Your Skype ID or WhatsApp Number'
                className='input input-bordered input-primary'
              />
              <input
                type='text'
                placeholder='Select a topic'
                className='input input-bordered input-primary'
              />
              <textarea
                className='textarea textarea-info'
                placeholder='Message'
              ></textarea>
              <button type='submit' className='send-btn'>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
