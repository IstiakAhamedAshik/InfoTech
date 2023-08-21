import React from 'react'
import './Chose.css'
import { Link } from 'react-router-dom'
import chooseUs from '../../assets/choseUs.webp'
const Chooseus = () => {
  return (
    <div>
      <div className='flex justify-center mt-16 items-center choseUs-667'>
        <div className='choseUs '>
          <img src={chooseUs} alt='' srcset='' className='ChoseUs-img mt-14' />
        </div>
        <div className='ChoseUs-details'>
          <h1 className='text-3xl text-blue-700 mb-5 font-bold'>
            Why Choose Us?
          </h1>
          <p className='text-xl text-justify ChoseUs-info1'>
            We Are Here For Made Your Idea. Our team is dedicated to learning
            and understanding about your business. By building a relationship
            with each of our clients, we can ensure our marketing strategy is
            built with the sole focus of solving the problems your business
            faces. Each of our marketing campaigns is built with the client's
            needs in mind to solve the greatest marketing problems. Our team is
            not only dedicated to their profession; they are persistent also to
            make clients completely satisfied because our services are
            client-centric.
          </p>

          <div className='mt-4 ChoseUs-info'>
            <Link>
              <button className='btn btn-wide chose-button font-bold'>Contact us</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chooseus