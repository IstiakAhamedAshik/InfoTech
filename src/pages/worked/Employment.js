import React from 'react'

const Employment = (props) => {
  const { numeric, achievement } = props.work
  return (
    <div className='employe'>
      <div className='employw-card'>
        <h1 className='num text-center'>{numeric}</h1>
        <p className='work text-center'>{achievement}</p>
      </div>
    </div>
  )
}

export default Employment
