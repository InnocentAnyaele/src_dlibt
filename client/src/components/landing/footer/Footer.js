import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faFacebook, faLinkedin, faGooglePlus} from '@fortawesome/free-brands-svg-icons'
import {Link} from 'react-scroll'

import StudentModal from '../modal/StudentModal'
import SrcModal from '../modal/SrcModal'

const Footer = () => {
    return (
        <div id="footer">
  <div className="footer-top" style={{padding:"40px", marginTop: "20px" }}>
           <Row>
               <Col lg={4} md={6} className="footer-info">
               <h3>School name</h3>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
               </Col>

               <Col lg={2} md={6} className="footer-links">
               <h4>Useful Links</h4>
                <ul>
                    {/* <li><a href="#homecarousel">Home</a></li>
                    <li><a href="#aboutus">About</a></li>
                    <li><a href="#news">News</a></li>
                    <li> <a href="#myModal" data-toggle="modal">Student Login</a></li>
                    <li><a href="#myModal2"  data-toggle="modal">SRC Login</a></li> */}
    <li><Link activeClass="active" spy={true} smooth={true} offset={-70} duration={500} to="header" activeClassName="selected">Home</Link></li> 
      <li><Link activeClass="active" spy={true} smooth={true} offset={-70} duration={500} to="gallery" activeClassName="selected">Gallery</Link></li>
      <li><Link activeClass="active" spy={true} smooth={true} offset={-70} duration={500} to="about" activeClassName="selected">About</Link></li>
      <li><Link activeClass="active" spy={true} smooth={true} offset={-70} duration={500} to="news" activeClassName="selected">News</Link></li>
      <li><Link activeClass="active" spy={true} smooth={true} offset={-70} duration={500} to="footer" activeClassName="selected">Contact</Link></li>
      <li style={{color: 'white'}}><Link><StudentModal/></Link></li>
      <li style={{color: 'white'}}><Link><SrcModal/></Link></li>
                </ul>
               </Col>

               <Col lg={3} md={6}>
               <h4>Contact Us</h4>
               <p><strong>Location: </strong> Location</p>
               <p><strong>Phone: </strong> 000-0000-0000-000</p>
               <p><strong>Email: </strong> email@google.com</p>
               <div className="social-links">
    <a href="www.twitter.com" class="twitter"><FontAwesomeIcon icon={faTwitter}/></a>
    <a href="www.facebook.com" class="facebook"><FontAwesomeIcon icon={faFacebook}/></a>
    <a href="www.instagram.com" class="instagram"><FontAwesomeIcon icon={faInstagram}/></a>
    <a href="www.gmail.com" class="gmail"><FontAwesomeIcon icon={faGooglePlus}/></a>
    <a href="www.linkedin.com" class="linkedin"><FontAwesomeIcon icon={faLinkedin}/></a>
</div>
               </Col>


<Col lg={3} md={6} className="footer-newsletter">
<h4>Contact</h4>
                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
</Col>
           </Row>

            <Container className="text-center">
     <div className="copyright">
         &copy; Copyright<strong>WebsiteName</strong>.All Rights Reserved </div>
         <div className="credits">
             Designed by <a href="https://innocentanyaele.github.io/innocent/">InnocentAnyaele</a>
         </div></Container>
       </div>
        </div>
     
    )
}

export default Footer