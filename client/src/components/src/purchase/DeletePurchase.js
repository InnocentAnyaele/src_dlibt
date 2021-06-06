import React from 'react';
import { Button } from 'react-bootstrap';
import DeleteIcon from '@material-ui/icons/Delete';
import axios from 'axios';

function DeletePurchase(props) {
	const deleteHandler = () => {
		axios
			.delete(`ecommerce/deleteSrcPurchase/${props.id}&${props.user}`)
			.then(() => {
				alert('Purchase deleted');
				window.location.reload(false);
			})
			.catch(() => {
				alert('Could not delete. Try again later');
			});
	};

	return (
		<div>
			<Button variant='Link' size='sm' onClick={deleteHandler}>
				<DeleteIcon style={{ color: 'red' }} />
			</Button>
		</div>
	);
}

export default DeletePurchase;
