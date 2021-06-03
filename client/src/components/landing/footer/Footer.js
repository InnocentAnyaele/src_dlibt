import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faTwitter,
	faInstagram,
	faFacebook,
} from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-scroll';

import StudentModal from '../modal/StudentModal';
import SrcModal from '../modal/SrcModal';

const Footer = () => {
	return (
		<div id='footer'>
			<div
				className='footer-top'
				style={{ padding: '40px', marginTop: '20px' }}>
				<Row>
					<Col lg={4} md={6} className='footer-info'>
						<h3>Datalink Institute of Business and Technology</h3>
						<p>
							The underlying philosophy and objectives of Data Link Institute of
							Business and Technology (DLIBT) are directed towards the physical,
							social, spiritual and mental development of students and faculty
							through both practical and intellectual preparation for good
							service to their communities.
						</p>
					</Col>

					<Col lg={2} md={6} className='footer-links'>
						<h4>Useful Links</h4>
						<ul>
							{/* <li><a href="#homecarousel">Home</a></li>
                    <li><a href="#aboutus">About</a></li>
                    <li><a href="#news">News</a></li>
                    <li> <a href="#myModal" data-toggle="modal">Student Login</a></li>
                    <li><a href="#myModal2"  data-toggle="modal">SRC Login</a></li> */}
							<li>
								<Link
									activeClass='active'
									spy={true}
									smooth={true}
									offset={-70}
									duration={500}
									to='header'
									activeClassName='selected'>
									Home
								</Link>
							</li>
							<li>
								<Link
									activeClass='active'
									spy={true}
									smooth={true}
									offset={-70}
									duration={500}
									to='gallery'
									activeClassName='selected'>
									Gallery
								</Link>
							</li>
							<li>
								<Link
									activeClass='active'
									spy={true}
									smooth={true}
									offset={-70}
									duration={500}
									to='about'
									activeClassName='selected'>
									About
								</Link>
							</li>
							<li>
								<Link
									activeClass='active'
									spy={true}
									smooth={true}
									offset={-70}
									duration={500}
									to='news'
									activeClassName='selected'>
									News
								</Link>
							</li>
							<li>
								<Link
									activeClass='active'
									spy={true}
									smooth={true}
									offset={-70}
									duration={500}
									to='footer'
									activeClassName='selected'>
									Contact
								</Link>
							</li>
							<li style={{ color: 'white' }}>
								<Link>
									<StudentModal />
								</Link>
							</li>
							<li style={{ color: 'white' }}>
								<Link>
									<SrcModal />
								</Link>
							</li>
						</ul>
					</Col>

					<Col lg={3} md={6}>
						<h4>Contact Us</h4>
						<p>Location: 5th Avenue Road (Comm. 10 & 11 New Road)</p>
						<p>Phone: +233 (0) 303 91 01 41</p>
						<p>Email: info@datalink.edu.gh</p>
						<div className='social-links'>
							<a
								href='https://twitter.com/DatalinkOf/status/1293644594790400001?s=08'
								class='twitter'>
								<FontAwesomeIcon icon={faTwitter} />
							</a>
							<a
								href='https://web.facebook.com/DatalinkInstituteofBusinessandTechnology?_rdc=1&_rdr'
								class='facebook'>
								<FontAwesomeIcon icon={faFacebook} />
							</a>
							<a
								href='https://www.instagram.com/datalinksrc/'
								class='instagram'>
								<FontAwesomeIcon icon={faInstagram} />
							</a>
						</div>
					</Col>

					<Col lg={3} md={6} className='footer-newsletter'>
						<h4>Mission and Vision</h4>
						<p>
							{' '}
							The vision of Data Link Institute of Business and Technology
							(DLIBT) is the dream, a mental picture of a desired future state
							the institute wants to attain, which is captured as follows;
							“DLIBT desires to be an internationally acclaimed centre of
							excellence in teaching, learning, research and community
							leadership.”
							<br></br> <br></br>
							Data Link Institute of Business and Technology (DLIBT) is a
							non-profit academic institution providing holistic, quality,
							multidisciplinary tertiary education to a multicultural
							environment. In doing this, we are guided by exemplary moral
							values, creativity and excellence.
						</p>
					</Col>
				</Row>

				<Container className='text-center'>
					<div className='copyright'>
						&copy; Copyright <strong>Datalink SRC Management Sys.</strong>. All
						Rights Reserved{' '}
					</div>
					<div className='credits'>
						Designed by{' '}
						<a href='https://innocentanyaele.github.io/innocent/'>
							InnocentAnyaele
						</a>
					</div>
				</Container>
			</div>
		</div>
	);
};

export default Footer;
