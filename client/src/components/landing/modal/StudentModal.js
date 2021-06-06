import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
// import Modal from 'react-modal'
// import ModalHeader from 'react-bootstrap/ModalHeader';
// import ModalBody from 'react-bootstrap/ModalBody';
// import ModalFooter from 'react-bootstrap/ModalFooter';
// import ModalTitle from 'react-bootstrap/ModalTitle'
// import './Modal.css'
import { Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';
import axios from 'axios';
import { Redirect } from 'react-router';

// Modal.setAppElement('#root')

class StudentModal extends Component {
	constructor(props) {
		super(props);

		this.state = {
			username: '',
			password: '',
			auth: false,
			message: '',
		};
	}

	changeHandler = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	submitHandler = async (e) => {
		e.preventDefault();
		await axios
			.post('/student/login', {
				username: this.state.username,
				password: this.state.password,
			})
			.then((res) => {
				sessionStorage.setItem('studenttoken', res.data.token);
				localStorage.setItem('studentUser', this.state.username);
				console.log(res.data);
				this.setState({ auth: res.data.auth });
				this.setState({ message: res.data.message });
			});
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

	render() {
		const { auth } = this.state;
		if (auth) return <Redirect to='/studentWelcome' />;

		return (
			<div>
				<Button variant='link' onClick={this.openModal}>
					Student
				</Button>

				<Modal
					isOpen={this.state.isOpen}
					size='modal-md'
					onRequestHide={this.hideModal}
					onRequestClose={this.hideModal}>
					<ModalHeader>
						<b>Student Login</b>
					</ModalHeader>

					<ModalBody>
						<Form onSubmit={this.submitHandler}>
							<Form.Group controlId='formBasicPassword'>
								{/* <Form.Label>Username</Form.Label> */}
								<Form.Control
									name='username'
									type='text'
									placeholder='Username'
									value={this.state.username}
									onChange={this.changeHandler}
									required
								/>
							</Form.Group>
							<Form.Group controlId='formBasicPassword'>
								{/* <Form.Label>Password</Form.Label> */}
								<Form.Control
									name='password'
									type='password'
									placeholder='Password'
									value={this.state.password}
									onChange={this.changeHandler}
									required
								/>
							</Form.Group>
							<p style={{ color: 'red' }}>
								<i> {this.state.message} </i>
							</p>
							<Button variant='primary' type='submit'>
								Login
							</Button>
						</Form>
					</ModalBody>

					<ModalFooter>
						<Button variant='default' onClick={this.hideModal}>
							{' '}
							Close{' '}
						</Button>
					</ModalFooter>
				</Modal>
			</div>
		);
	}
}

export default StudentModal;
