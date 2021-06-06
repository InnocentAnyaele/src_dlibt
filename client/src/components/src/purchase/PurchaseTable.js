import React, { useState, useEffect } from 'react';
import { Table, Spinner } from 'react-bootstrap';
import axios from 'axios';
// import DeletePurchase from './DeletePurchase';

const PurchaseTable = () => {
	const [items, setItems] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		axios
			.get('/ecommerce/getSrcPurchase')
			.then((res) => {
				setItems(res.data);
				setLoading(false);
				console.log(res.data);
			})
			.catch(() => {
				setLoading(false);
				alert('Error retrieving data');
			});
	}, []);

	return (
		<div>
			<Table striped>
				<thead style={{ color: 'blue' }}>
					<tr>
						<th>Name</th>
						<th>ID</th>
						<th>Email</th>
						<th>Phone</th>
						<th>Price</th>
						<th>Products</th>
						<th>Date</th>
						{/* <th>Delete</th> */}
					</tr>
				</thead>
				<tbody>
					{loading ? (
						<div className='m-3'>
							<Spinner animation='border' variant='primary' size='lg' />
						</div>
					) : (
						items.map((item) => (
							<tr key={item._id}>
								<td>{item.name}</td>
								<td>{item.user}</td>
								<td>{item.email}</td>
								<td>{item.phone}</td>
								<td>{item.price}</td>
								<td>
									<ul>
										{item.product.map((product) => (
											<li key={product.id}> {product.title} </li>
										))}
									</ul>
								</td>
								<td>{item.createdAt}</td>
								{/* <td>
									<DeletePurchase
										key={item._id}
										id={item._id}
										user={item.user}
									/>
								</td> */}
							</tr>
						))
					)}
				</tbody>
			</Table>
		</div>
	);
};

export default PurchaseTable;
