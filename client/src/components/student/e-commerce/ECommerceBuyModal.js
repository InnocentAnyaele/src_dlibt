import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
// import Modal from 'react-modal'
// import ModalHeader from 'react-bootstrap/ModalHeader';
// import ModalBody from 'react-bootstrap/ModalBody';
// import ModalFooter from 'react-bootstrap/ModalFooter';
// import ModalTitle from 'react-bootstrap/ModalTitle'
import { Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import axios from 'axios';
// Modal.setAppElement('#root')

class ECommerceBuyModal extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: '',
			email: '',
			phone: '',
			info: '',
			message: '',
			totalPrice: 0,
		};
	}

	calculatePrice = () => {
		let price = 0;

		if (localStorage.getItem('cart')) {
			const cartArray = JSON.parse(localStorage.getItem('cart'));
			cartArray.forEach((v) => {
				const cartPrice = parseInt(v.price);
				console.log(cartPrice);
				price += cartPrice;
			});
		}
		return price;
	};

	changeHandler = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	submitHandler = async (e) => {
		e.preventDefault();
		// this.setState({ product: this.props.title });
		// alert(
		// 	'Please use contact from the purchase information to get in touch with buyer',
		// );
		// console.log(this.state.name, this.state.info, this.state.phone, this.state.email, this.state.product)
		if (localStorage.getItem('cart')) {
			try {
				const res = await axios.post('/ecommerce/purchaseEcommerce', {
					name: this.state.name,
					email: this.state.email,
					phone: this.state.phone,
					info: this.state.info,
					product: JSON.parse(localStorage.getItem('cart')),
					user: localStorage.getItem('studentUser'),
					price: this.calculatePrice(),
				});
				if (res.status === 200) {
					// this.setState({
					// 	message:
					// });
					alert('Your purchase has been sent. Payment is on delivery.');
				}
			} catch (err) {
				if (err.response.status === 500) {
					this.setState({ message: 'There was a problem with the server!' });
					// console.log(err)
				} else {
					this.setState({ message: err.response.data.msg });
					// console.log(err.response.data.msg)
				}
			}
		} else {
			alert('Your cart is empty!!');
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
	};

	clearCart = () => {
		localStorage.removeItem('cart');
		window.location.reload(false);
	};

	render() {
		return (
			<div>
				<button className='btn btn-primary' onClick={this.openModal}>
					<ShoppingCartIcon />
					Check Cart{' '}
					{/* {localStorage.getItem('cart') ? (
						<span className='badge badge-light'>
							{' '}
							{JSON.parse(localStorage.getItem('cart')).length}{' '}
						</span>
					) : (
						<span className='badge badge-light'>0</span>
					)} */}
				</button>

				<Modal
					isOpen={this.state.isOpen}
					onRequestHide={this.hideModal}
					onRequestClose={this.hideModal}>
					<ModalHeader>
						{/* <ModalClose onClick={this.hideModal}/> */}
						Purchase {this.props.title}{' '}
						<button
							className='btn btn-sm btn-danger mr-0'
							onClick={this.clearCart}>
							clear
						</button>
					</ModalHeader>
					<ModalBody>
						{localStorage.getItem('cart') ? (
							<ul className='list-group mb-3'>
								<li className='list-group-item list-group-item-info'>
									<span style={{ fontWeight: 'bolder' }}>
										Items in Cart{' '}
										<span className='badge badge-light'>
											{localStorage.getItem('cart')
												? JSON.parse(localStorage.getItem('cart')).length
												: 0}
										</span>
									</span>{' '}
								</li>

								{JSON.parse(localStorage.getItem('cart')).map((item) => (
									<li key={item.id} className='list-group-item'>
										<span className='badge badge-dark'>{item.title}</span>
									</li>
								))}
							</ul>
						) : null}

						<span className='badge badge-primary m-3'>
							<div style={{ fontSize: '15px' }}>
								Total price: {this.calculatePrice()}
							</div>
						</span>
						<p>
							<i>
								For mobile money payment, please pay the due amount using the
								number displayed on the card
							</i>
						</p>

						{/* {JSON.parse(localStorage.getItem('cart')).map((item) => (
							<p key={item.id}> {item.title} </p>
						))} */}

						<Form onSubmit={this.submitHandler}>
							<Form.Group controlId='formBasicName'>
								<Form.Control
									type='text'
									placeholder='Name'
									name='name'
									value={this.state.name}
									onChange={this.changeHandler}
									required
								/>
							</Form.Group>

							<Form.Group controlId='formBasicEmail'>
								<Form.Control
									type='email'
									placeholder='Email'
									name='email'
									value={this.state.email}
									onChange={this.changeHandler}
									required
								/>
								{/* <Form.Text className="text-muted">
    We'll never share your email with anyone else.
  </Form.Text> */}
							</Form.Group>

							<Form.Group controlId='formBasicPhone'>
								<Form.Control
									type='text'
									placeholder='Phone'
									name='phone'
									value={this.state.phone}
									onChange={this.changeHandler}
									required
								/>
							</Form.Group>

							<Form.Group controlId='exampleForm.ControlTextarea1'>
								<Form.Control
									as='textarea'
									rows='3'
									name='info'
									placeholder='Additional Info - like where and when on campus to deliver the product'
									value={this.state.info}
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

export default ECommerceBuyModal;
