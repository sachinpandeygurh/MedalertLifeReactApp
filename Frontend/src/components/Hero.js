import React from 'react'
import { CCarousel, CCarouselItem,CImage } from '@coreui/react'
import img1 from '../images/slider/1.png'
import img2 from '../images/slider/4.png'
import img3 from '../images/slider/5.png'

const Hero = () => {
  return (
    <div className='mainSlider'>
      <CCarousel  controls>
  <CCarouselItem className='mainSliderImg justify-content-center'>
    <CImage className="d-block rounded" src={img2} alt="slide 1" />
  </CCarouselItem>
  <CCarouselItem className='mainSliderImg justify-content-center'>
    <CImage className="d-block rounded" src={img1} alt="slide 2" />
  </CCarouselItem>
  <CCarouselItem className='mainSliderImg justify-content-center'>
    <CImage className="d-block rounded" src={img3} alt="slide 3" />
  </CCarouselItem>
</CCarousel>


    </div>
  )
}

export default Hero
