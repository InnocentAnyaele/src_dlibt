import React from 'react'
import './Header.css'
import {Carousel, Button} from 'react-bootstrap'
import carousel1 from '../../../assets/img/img8.jpg'
import carousel2 from '../../../assets/img/img3.jpg'
import carousel3 from '../../../assets/img/img6.jpg'
import { Link} from "react-scroll"

const Caption = () => {
  return (
      <div className="text-left">
      <h1 className="title">DataLink Institute of Business and Technology</h1>
          <p className="subtitle">Student Representative Council</p>
          <Link activeClass="active" spy={true} smooth={true} offset={-70} duration={500} to="news" activeClassName="selected"><Button variant="warning">Latest News</Button>{' '}</Link>
      </div>
  )
}


const Header = () => {
    return (
 <Carousel className="slider-container" id="header">

<Carousel.Item>
  <img
    className="d-block w-100"
    src={carousel1}
    alt="First slide"
  />
  <Carousel.Caption>
  <Caption/>
    </Carousel.Caption>
</Carousel.Item>

<Carousel.Item>
  <img
    className="d-block w-100"
    src={carousel2}
    alt="Second slide"
  />
  <Carousel.Caption>
  <Caption/>
    </Carousel.Caption>
</Carousel.Item>

<Carousel.Item>
  <img
    className="d-block w-100"
    src={carousel3}
    alt="Third slide"
  />
  <Carousel.Caption>
  <Caption/>
    </Carousel.Caption>
</Carousel.Item>

</Carousel>
    )
}

export default Header