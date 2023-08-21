import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { AiOutlineClose } from 'react-icons/ai'
import './navbar.css'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  let location = useLocation()
  return (
    <nav className='py-5 background-img'>
      <section className='container mx-auto flex justify-between relative nav-large'>
        <div>
          <Link to='/' className='text-3xl font-bold ml-10 font-serif'>
            Infotech
          </Link>
        </div>
        <div>
          {/* destop view  */}
          <div className='hidden lg:flex gap-4'>
            {location.pathname === '/contact' ? (
              <Link to='/' className='font-semibold text-xl text-slate-700'>
                Home
              </Link>
            ) : (
              <AnchorLink
                href='#home'
                className='font-semibold text-xl text-slate-700'
              >
                Home
              </AnchorLink>
            )}
            {location.pathname === '/contact' ? (
              <Link to='/' className='font-semibold text-xl text-slate-700'>
                About
              </Link>
            ) : (
              <AnchorLink
                href='#about-us'
                className='font-semibold text-xl text-slate-700'
              >
                About
              </AnchorLink>
            )}
            {location.pathname === '/contact' ? (
              <Link to='/' className='font-semibold text-xl text-slate-700'>
                Service
              </Link>
            ) : (
              <AnchorLink
                href='#service'
                className='font-semibold text-xl text-slate-700'
              >
                Service
              </AnchorLink>
            )}
            {location.pathname === '/contact' ? (
              <Link to='/' className='font-semibold text-xl text-slate-700'>
                Testimonial
              </Link>
            ) : (
              <AnchorLink
                href='#testimonial'
                className='font-semibold text-xl text-slate-700'
              >
                Testimonial
              </AnchorLink>
            )}

            <Link
              to='/contact'
              className='font-semibold text-xl text-slate-700'
            >
              Contact
            </Link>
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
                <>
                  {location.pathname === '/contact' ? (
                    <Link
                      to='/'
                      className='font-semibold text-xl text-slate-700 left-2 ml-3'
                    >
                      Home
                    </Link>
                  ) : (
                    <AnchorLink
                      href='#home'
                      className='font-semibold text-xl text-slate-700 left-2 ml-3'
                    >
                      Home
                    </AnchorLink>
                  )}
                  {location.pathname === '/contact' ? (
                    <Link
                      to='/'
                      className='font-semibold text-xl text-slate-700 left-2 ml-3'
                    >
                      About
                    </Link>
                  ) : (
                    <AnchorLink
                      href='#about-us'
                      className='font-semibold text-xl text-slate-700 left-2 ml-3'
                    >
                      About
                    </AnchorLink>
                  )}
                  {location.pathname === '/contact' ? (
                    <Link
                      to='/'
                      className='font-semibold text-xl text-slate-700 left-2 ml-3'
                    >
                      Service
                    </Link>
                  ) : (
                    <AnchorLink
                      href='#service'
                      className='font-semibold text-xl text-slate-700 left-2 ml-3'
                    >
                      Service
                    </AnchorLink>
                  )}
                  {location.pathname === '/contact' ? (
                    <Link
                      to='/'
                      className='font-semibold text-xl text-slate-700 left-2 ml-3'
                    >
                      Testimonial
                    </Link>
                  ) : (
                    <AnchorLink
                      href='#testimonial'
                      className='font-semibold text-xl text-slate-700 left-2 ml-3 '
                    >
                      Testimonial
                    </AnchorLink>
                  )}
                  <Link
                    to='/contact'
                    className='font-semibold text-xl left-2 ml-3 text-slate-700 mb-2'
                  >
                    Contact
                  </Link>
                </>
              </div>
            )}
          </div>
        </div>
      </section>
    </nav>
  )
}
export default Navbar
