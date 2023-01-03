import React from 'react'
import './info.scss'

export default function Info(props) {
  // console.log(props)
  return (
    <div>
      <div className="card">
          <img src={props.card_info.image} className="card-img-top" alt="..." />
          <div className="card-body">
         
            <h3 className="card-title">
                  {props.card_info.title}
                  </h3>
            <h4 className="card-text">${props.card_info.price}</h4>
          </div>
        </div>
    </div>
  )
}
