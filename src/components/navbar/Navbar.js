import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { AiOutlineClose } from 'react-icons/ai'
import './navbar.css'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const menuItems = [
    {
      name: 'Home',
      path: '#home',
    },
    {
      name: 'About',
      path: '#about',
    },
    {
      name: 'Services',
      path: '#services',
    },
    {
      name: 'Testimonial',
      path: '#testimonial',
    },
    {
      name: 'Contact',
      path: '#contact',
    },
  ]
  return (
    <nav className='py-5 background-img'>
      <section className='container mx-auto flex justify-between relative nav-large'>
        <div>
          <Link className='text-3xl font-bold ml-10 font-serif'>Infotech</Link>
        </div>
        <div>
          {/* destop view  */}
          <div className='hidden lg:flex gap-4'>
            {menuItems.map((mi, i) => (
              <Link key={i} className='font-semibold text-xl text-slate-700'>
                {mi.name}
              </Link>
            ))}
          </div>
          {/* tablet view  */}
          <div className='flex gap-4'>
            <div className='lg:hidden'>
              {open ? (
                <AiOutlineClose
                  className='cursor-pointer icon mr-8'
                  onClick={() => setOpen(!open)}
                />
              ) : (
                <FaBars
                  className='cursor-pointer icon mr-8'
                  onClick={() => setOpen(!open)}
                />
              )}
            </div>
            {open && (
              <div className='flex flex-col gap-4 absolute lg:hidden top-14    md:left-0 bg-slate-100 w-[100%] nav-small'>
                {menuItems.map((mi, i) => (
                  <>
                    <Link
                      key={i}
                      className='font-semibold text-xl left-2 ml-3 p-2 text-slate-700'
                    >
                      {mi.name}
                    </Link>
                  </>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </nav>
  )
}
