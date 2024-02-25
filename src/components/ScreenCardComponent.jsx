import React from 'react'

import './ScreenCardComponent.css'

const ScreenCardComponent = ({name, college, course, url}) => {


  return (
    <div className='screen'>
      <h2>Identity Card</h2>
      <div className="card-container">
        
      <div id='avatar'>{name ? <img src={url} alt="User Photo" /> : <div id='custom-avatar'></div>}</div>
      <div>
        <div className="info-container">
          <p className='label'>Name</p>
          <p className='result'>{name ? name : "XXXXX XXXXXXX XXXXXX"}</p>
        </div>
        <div className="info-container">
          <p className='label'>College</p>
          <p className='result'>{college ? college : "XXXXXXX XXXXXXX"}</p>
        </div>
        <div className="info-container">
          <p className='label'>Course</p>
          <p className='result'>{course ? course : "XXXXXXX XXXXXXX"}</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default ScreenCardComponent