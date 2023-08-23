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
              <Link
                to='/'
                className='font-semibold text-xl text-slate-700 font-serif'
              >
                Home
              </Link>
            ) : location.pathname === '/allservice' ? (
              <Link
                to='/'
                className='font-semibold text-xl text-slate-700 font-serif'
              >
                Home
              </Link>
            ) : (
              <AnchorLink
                href='#home'
                className='font-semibold text-xl text-slate-700 font-serif'
              >
                Home
              </AnchorLink>
            )}
            {location.pathname === '/contact' ? (
              <Link
                to='/'
                className='font-semibold text-xl text-slate-700 font-serif'
              >
                About
              </Link>
            ) : location.pathname === '/allservice' ? (
              <Link
                to='/'
                className='font-semibold text-xl text-slate-700 font-serif'
              >
                About
              </Link>
            ) : (
              <AnchorLink
                href='#about-us'
                className='font-semibold text-xl text-slate-700 font-serif'
              >
                About
              </AnchorLink>
            )}
            {location.pathname === '/contact' ? (
              <Link
                to='/'
                className='font-semibold text-xl text-slate-700 font-serif'
              >
                Service
              </Link>
            ) : location.pathname === '/allservice' ? (
              <Link
                to='/'
                className='font-semibold text-xl text-slate-700 font-serif'
              >
                Service
              </Link>
            ) : (
              <AnchorLink
                href='#service'
                className='font-semibold text-xl text-slate-700 font-serif'
              >
                Service
              </AnchorLink>
            )}
            {location.pathname === '/contact' ? (
              <Link
                to='/'
                className='font-semibold text-xl text-slate-700 font-serif'
              >
                Testimonial
              </Link>
            ) : location.pathname === '/allservice' ? (
              <Link
                to='/'
                className='font-semibold text-xl text-slate-700 font-serif'
              >
                Testimonial
              </Link>
            ) : (
              <AnchorLink
                href='#testimonial'
                className='font-semibold text-xl text-slate-700 font-serif'
              >
                Testimonial
              </AnchorLink>
            )}

            <Link
              to='/contact'
              className='font-semibold text-xl text-slate-700 font-serif'
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
                      className='font-semibold text-xl text-slate-700 font-serif'
                    >
                      Home
                    </Link>
                  ) : location.pathname === '/allservice' ? (
                    <Link
                      to='/'
                      className='font-semibold text-xl text-slate-700 font-serif'
                    >
                      Home
                    </Link>
                  ) : (
                    <AnchorLink
                      href='#home'
                      className='font-semibold text-xl text-slate-700 left-2 ml-3 mt-4 font-serif'
                    >
                      Home
                    </AnchorLink>
                  )}
                  {location.pathname === '/contact' ? (
                    <Link
                      to='/'
                      className='font-semibold text-xl text-slate-700 font-serif'
                    >
                      About
                    </Link>
                  ) : location.pathname === '/allservice' ? (
                    <Link
                      to='/'
                      className='font-semibold text-xl text-slate-700 font-serif'
                    >
                      About
                    </Link>
                  ) : (
                    <AnchorLink
                      href='#about-us'
                      className='font-semibold text-xl text-slate-700 left-2 ml-3 font-serif'
                    >
                      About
                    </AnchorLink>
                  )}
                  {location.pathname === '/contact' ? (
                    <Link
                      to='/'
                      className='font-semibold text-xl text-slate-700 font-serif'
                    >
                      Service
                    </Link>
                  ) : location.pathname === '/allservice' ? (
                    <Link
                      to='/'
                      className='font-semibold text-xl text-slate-700 font-serif'
                    >
                      Service
                    </Link>
                  ) : (
                    <AnchorLink
                      href='#service'
                      className='font-semibold text-xl text-slate-700 left-2 ml-3 font-serif'
                    >
                      Service
                    </AnchorLink>
                  )}
                  {location.pathname === '/contact' ? (
                    <Link
                      to='/'
                      className='font-semibold text-xl text-slate-700 font-serif'
                    >
                      Testimonial
                    </Link>
                  ) : location.pathname === '/allservice' ? (
                    <Link
                      to='/'
                      className='font-semibold text-xl text-slate-700 left-2 ml-3 font-serif'
                    >
                      Testimonial
                    </Link>
                  ) : (
                    <AnchorLink
                      href='#testimonial'
                      className='font-semibold text-xl text-slate-700 left-2 ml-3 font-serif'
                    >
                      Testimonial
                    </AnchorLink>
                  )}

                  <Link
                    to='/contact'
                    className='font-semibold text-xl left-2 ml-3 text-slate-700 mb-2 font-serif'
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
