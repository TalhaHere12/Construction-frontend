import React from 'react'
import icon1 from '/Construction Site/my-app/src/Images/brand-logo-1.png'
import icon2 from '/Construction Site/my-app/src/Images/brand-logo-2.png'
import icon3 from '/Construction Site/my-app/src/Images/brand-logo-3.png'
import icon4 from '/Construction Site/my-app/src/Images/brand-logo-4.png'
import icon5 from '/Construction Site/my-app/src/Images/brand-logo-5.png'
import './Icon.css'

function Icon() {
  return (
    <div className='icon' >
        <p>
        We Worked with royal clients
        </p>
        <div className="icons">
            <img src={icon1} alt="" className='icon1' />
            <img src={icon2} alt="" className='icon2' />
            <img src={icon3} alt="" className='icon3' />
            <img src={icon4} alt="" className='icon4' />
            <img src={icon5} alt="" className='icon5' />
        </div>
    </div>
  )
}

export default Icon