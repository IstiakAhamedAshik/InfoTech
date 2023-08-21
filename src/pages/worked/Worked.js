import React from 'react'
import'./work.css'
import Employment from './Employment'

const Worked = () => {
 const works = [
   {
     numeric: '365+',
     achievement: 'Days Worked',
   },
   {
     numeric: '105+',
     achievement: 'Project Finished',
   },
   {
     numeric: '10+',
     achievement: 'Dedicated Employees',
   },
   {
     numeric: '200+',
     achievement: 'Happy Clients',
   },
 ]
  return (
    <div className='flex justify-center items-center work-background-img'>
      <div className='grid grid-cols-4 mb-10 gap-6 mt-28 worked-grid'>
        {works.map((work, i) => (
          <Employment key={i} work={work}></Employment>
        ))}
      </div>
    </div>
  )
}

export default Worked