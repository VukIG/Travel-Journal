import React from 'react'
import { IoLocationSharp } from 'react-icons'
function Card(props) {
  if (props == null)
    return;
  return (
    <div>
      <img src={props.data.img} alt="" />
      <div className="articleText">
        <div className="location">
          <IoLocationSharp />
          <p>{props.data}</p>
          <p className='viewOnGM'>View on Google maps</p>
        </div>
        <h1>{props.data.name}</h1>
        <p><b>{props.data.date}</b></p>
        <p>{props.data}</p>
      </div>
    </div>
  )
}

export default Card