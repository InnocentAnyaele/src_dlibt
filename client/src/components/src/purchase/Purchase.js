import React from 'react';
import '../src.css';
import { Container } from 'react-bootstrap';
import PurchaseTable from './PurchaseTable';
import PurchaseReport from './PurchaseReport';

function Purchase() {
	return (
		<div>
			<div className='wrapper'>
				<Container>
					<h1 style={{ fontsize: '60px' }} className='text-muted'>
						Purchase History
					</h1>
					<PurchaseReport />
					<hr />
					<PurchaseTable />
				</Container>
			</div>
		</div>
	);
}

export default Purchase;
