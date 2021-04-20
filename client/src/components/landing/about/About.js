import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
	return (
		<Container
			className='text-center'
			id='about'
			style={{ height: 'relative', minHeight: '100vh' }}>
			<h1 style={{ padding: '40px' }}>About</h1>
			<Row>
				<Col className='text-justify' lg={6} md={6}>
					<p>
						{' '}
						The vision of Data Link Institute of Business and Technology (DLIBT)
						is the dream, a mental picture of a desired future state the
						institute wants to attain, which is captured as follows; “DLIBT
						desires to be an internationally acclaimed centre of excellence in
						teaching, learning, research and community leadership.” Data Link
						Institute of Business and Technology (DLIBT) is a non-profit
						academic institution providing holistic, quality, multidisciplinary
						tertiary education to a multicultural environment. In doing this, we
						are guided by exemplary moral values, creativity and excellence. The
						student shall be taught to be an exemplary custodian of knowledge,
						with integrity, good conscience, consideration of others,
						patriotism, and accountability to God and man. The aim is to produce
						graduates who will practice knowledge in honesty and fairness to
						others.
					</p>
				</Col>

				<Col className='text-justify' lg={6} md={6}>
					<p>
						{' '}
						The underlying philosophy and objectives of Data Link Institute of
						Business and Technology (DLIBT) are directed towards the physical,
						social, spiritual and mental development of students and faculty
						through both practical and intellectual preparation for good service
						to their communities. The University aims at inculcating in each
						student a high sense of integrity, perseverance, adaptability,and
						initiative. Our educational environment promotes a blend of high
						moral values and faith in learning, to equip students with
						resilience and creativity for dealing with professional and life
						issues. We foster team work, collaboration, and the ability to
						partner with a community of experts for joint personal and national
						benefits. We aim to produce graduates who have a high analytical and
						problem-solving ability, to successfully apply academic principles
						to the solution of practical problems in a creative manner.
					</p>
				</Col>
			</Row>
		</Container>
	);
};

export default About;
