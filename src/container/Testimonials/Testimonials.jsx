import React,{useState, useEffect} from 'react'
import './Testimonials.scss'

import { HiChevronLeft, HiChevronRight} from 'react-icons/hi'

import AppWrap from '../../wrapper/AppWrap'
import MotionWrap from '../../wrapper/MotionWrap'

import {urlFor, client} from '../../client' 

const Testimonials = () => {

  const [testimonials, setTestimonials] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleClick = (index) => {
    setCurrentIndex(index);
  };


  useEffect(() => {
    const query = '*[_type == "testimonials"]'
  

    client.fetch(query)
      .then((data) => {
        setTestimonials(data)
      })
  },[])

  return (
    <> 
      {testimonials.length && (
        <>
          <div className='app__testimonial-item app__flex'>
            <img src={urlFor(testimonials[currentIndex].imageurl)} alt={testimonials[currentIndex].name}/>
            <div className="app__testimonial-content">
              <p className="p-text">{testimonials[currentIndex].feedback}</p>
              <div>
                <h4 className="bold-text">{testimonials[currentIndex].name}</h4>
                <h5 className="p-text">{testimonials[currentIndex].company}</h5>
              </div>
            </div>
          </div>
          <div className="app__testimonial-btns app__flex">
            <div className="app__flex" onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
              <HiChevronLeft />
            </div>

            <div className="app__flex" onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
              <HiChevronRight />
            </div>
          </div>
        </>
      )}


    </>
  )
}

export default AppWrap(
  MotionWrap(Testimonials, 'app__testimonials'),
  'testimonial',
  "app__primarybg"
)