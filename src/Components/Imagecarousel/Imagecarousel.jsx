import React from 'react' 
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

function Imagecarousel() {
  return (
    <div className='Carousel-container' >
        <button> <FiChevronLeft></FiChevronLeft> </button>
        <button><FiChevronRight></FiChevronRight></button>

    </div>
  )
}

export default Imagecarousel