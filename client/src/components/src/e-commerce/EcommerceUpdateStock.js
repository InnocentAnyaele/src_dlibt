import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
// import Modal from 'react-modal'
// import ModalHeader from 'react-bootstrap/ModalHeader';
// import ModalBody from 'react-bootstrap/ModalBody';
// import ModalFooter from 'react-bootstrap/ModalFooter';
// import ModalTitle from 'react-bootstrap/ModalTitle'
import { Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';
// import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import axios from 'axios';
// Modal.setAppElement('#root')

class ECommerceUpdateStock extends Component {
	constructor(props) {
		super(props);

		this.state = {
			stock: 0,
			message: '',
		};
	}

	changeHandler = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	submitHandler = async (e) => {
		e.preventDefault();
		try {
			const res = await axios.patch(`/ecommerce/updateStock/${this.props.id}`, {
				stock: this.state.stock,
			});
			if (res.status === 200) {
				this.setState({ message: 'Stock updated' });
			}
		} catch (err) {
			if (err.response.status === 500) {
				this.setState({ message: 'Something went wrong' });
			}
		}
	};

	state = {
		isOpen: false,
	};

	openModal = () => {
		this.setState({
			isOpen: true,
		});
	};

	hideModal = () => {
		this.setState({
			isOpen: false,
		});
		window.location.reload(false);
	};

	render() {
		return (
			<div>
				<button className='btn btn-link mr-2' onClick={this.openModal}>
					<i>update stock</i>
				</button>

				<Modal
					isOpen={this.state.isOpen}
					onRequestHide={this.hideModal}
					onRequestClose={this.hideModal}>
					<ModalHeader>
						{/* <ModalClose onClick={this.hideModal}/> */}
						Update Stock {this.props.title} 
					</ModalHeader>
					<ModalBody>
						<Form onSubmit={this.submitHandler}>
							<Form.Group controlId='formBasicName'>
								<Form.Control
									type='text'
									placeholder='Number of stock'
									name='stock'
									value={this.state.stock}
									onChange={this.changeHandler}
									required
								/>
							</Form.Group>
							<p style={{ color: 'red' }}>
								<i>{this.state.message}</i>
							</p>

							<Button variant='primary' type='submit'>
								Submit
							</Button>
						</Form>
					</ModalBody>
					<ModalFooter>
						<button className='btn btn-default' onClick={this.hideModal}>
							Close
						</button>
					</ModalFooter>
				</Modal>
			</div>
		);
	}
}

export default ECommerceUpdateStock;
