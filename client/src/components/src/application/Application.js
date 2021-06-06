import React from 'react';
import '../src.css';
import { Container } from 'react-bootstrap';
import ApplicationTable from './ApplicationTable';
import ApplicationReport from './ApplicationReport';

const Application = () => {
	return (
		<div className='wrapper'>
			<Container>
				<h1 style={{ fontsize: '60px' }} className='text-muted'>
					Applications
				</h1>
				<ApplicationReport />
				<hr />
				<ApplicationTable />
			</Container>
		</div>
	);
};

export default Application;
