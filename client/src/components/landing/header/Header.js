import React from 'react';
import './Header.css';
import { Carousel, Button } from 'react-bootstrap';
// import carousel1 from '../../../assets/img/img8.jpg'
// import carousel2 from '../../../assets/img/img3.jpg'
// import carousel3 from '../../../assets/img/img6.jpg'
import { Link } from 'react-scroll';
import management from '../../../assets/img/management7.svg';
import news from '../../../assets/img/news5.svg';
import image from '../../../assets/img/image1.svg';
import student from '../../../assets/img/student1.svg';

const Header = () => {
	return (
		<div style={{ backgroundColor: '#F5F7FA' }} id='header'>
			{/* <div style={{backgroundColor: '#CACCD1'}} id="header"> */}
			<Carousel style={{ minHeight: '100vh' }} interval='2000'>
				<Carousel.Item>
					<div className='row' style={{ marginTop: '100px' }}>
						<div className='col-sm p-5'>
							<p className='subtitle1'>Student Council Managment Platform</p>
							<h1 className='title1'>
								DATA LINK INSTITUTE OF BUSINESS AND TECHNOLOGY
							</h1>
							<div className='pt-2'>
								<Link
									activeClass='active'
									spy={true}
									smooth={true}
									offset={-70}
									duration={500}
									to='news'
									activeClassName='selected'>
									<Button
										className='mb-2'
										variant='outline-warning'
										style={{ width: '250px' }}>
										Latest News
									</Button>{' '}
								</Link>
								<Link
									activeClass='active'
									spy={true}
									smooth={true}
									offset={-70}
									duration={500}
									to='about'
									activeClassName='selected'>
									<Button
										className='mb-2'
										variant='primary'
										style={{ width: '250px' }}>
										About the SRC
									</Button>{' '}
								</Link>
							</div>
						</div>

						<div className='col-sm'>
							<img
								style={{ width: '500px', height: '600px' }}
								src={management}
								alt='First slide'
							/>
						</div>
					</div>
				</Carousel.Item>

				<Carousel.Item>
					<div className='row' style={{ marginTop: '100px' }}>
						<div className='col-sm p-5'>
							<h1 className='title2'>
								GET THE LATEST NEWS DIRECTLY FROM THE STUDENT COUNCIL!
							</h1>
							<div className='pt-2'>
								<Link
									activeClass='active'
									spy={true}
									smooth={true}
									offset={-70}
									duration={500}
									to='news'
									activeClassName='selected'>
									<Button
										className='mb-2'
										variant='warning'
										style={{ width: '250px' }}>
										Latest News
									</Button>{' '}
								</Link>
							</div>
						</div>

						<div className='col-sm'>
							<img
								style={{ width: '500px', height: '600px' }}
								src={news}
								alt='First slide'
							/>
						</div>
					</div>
				</Carousel.Item>

				<Carousel.Item>
					<div className='row' style={{ marginTop: '100px' }}>
						<div className='col-sm p-5'>
							<h1 className='title2'>
								BROWSE A PORTFOLIO OF SRC EVENTS AND MEMORABLE IMAGES.
							</h1>
							<div className='pt-5'>
								<Link
									activeClass='active'
									spy={true}
									smooth={true}
									offset={-70}
									duration={500}
									to='gallery'
									activeClassName='selected'>
									<Button
										className='mb-2'
										variant='info'
										style={{ width: '250px' }}>
										Gallery
									</Button>{' '}
								</Link>
							</div>
						</div>

						<div className='col-sm'>
							<img
								style={{ width: '500px', height: '600px' }}
								src={image}
								alt='First slide'
							/>
						</div>
					</div>
				</Carousel.Item>

				<Carousel.Item>
					<div className='row' style={{ marginTop: '100px' }}>
						<div className='col-sm p-5'>
							<h1 className='title2'>
								LOGIN AS STUDENT AND HAVE ACCESS TO{' '}
								<span style={{ color: '#FF4500' }}>HANDOUTS</span>,{' '}
								<span style={{ color: '#FF4500' }}>TIMETABLES</span>,{' '}
								<span style={{ color: '#FF4500' }}>SEMINAR VIDEOS</span> AND THE{' '}
								<span style={{ color: '#FF4500' }}>VOTING PLATFORM</span>
							</h1>
							{/* <div className='pt-5'>
      <Link  activeClass="active" spy={true} smooth={true} offset={-70} duration={500} to="gallery" activeClassName="selected"><Button className="mb-2" variant="info" style={{width: '250px'}}>Gallery</Button>{' '}</Link> 
    </div> */}
						</div>

						<div className='col-sm'>
							<img
								style={{ width: '500px', height: '600px' }}
								src={student}
								alt='First slide'
							/>
						</div>
					</div>
				</Carousel.Item>
			</Carousel>
		</div>
	);
};

export default Header;
