import React from 'react'
import "./Map.css"

function Map() {
  return (
    <div className="location">

    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.06645592677!2d73.02386367531209!3d33.60358014128846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df946f24e9fa83%3A0x5c0a503ad0bd55b4!2sEziline%20Software%20House%20Pvt%20Ltd!5e0!3m2!1sen!2s!4v1690362240370!5m2!1sen!2s" referrerpolicy="no-referrer-when-downgrade" className='eziline'  >
    </iframe>
    <div className="box9">
        <div className="address">
            <p className='name' >Office Address</p>
            <div className="line"></div>
            <p className='office-add' >PO Box 5849 Collins Street West <br /> Victoria 9005 Australia</p>
            <p className='phone-no' >
            Phone : +1800-456-7890
            </p>
        </div>
    </div>
    </div>
  )
}

export default Map