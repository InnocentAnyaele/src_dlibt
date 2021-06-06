import React, { Component } from 'react';
import { Form, Button, ProgressBar } from 'react-bootstrap';
// import Modal from 'react-modal'
// import ModalHeader from 'react-bootstrap/ModalHeader';
// import ModalBody from 'react-bootstrap/ModalBody';
// import ModalFooter from 'react-bootstrap/ModalFooter';
// import ModalTitle from 'react-bootstrap/ModalTitle'
import { Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';
import AddIcon from '@material-ui/icons/Add';
import axios from 'axios';
import { storage } from '../../../firebase/firebase';

// Modal.setAppElement('#root')

class ECommerceAdd extends Component {
	constructor(props) {
		super(props);

		this.state = {
			title: '',
			name: '',
			info: '',
			price: '',
			email: '',
			file: '',
			phone: '',
			type: 'product',
			fileName: 'Choose FIle',
			message: '',
			uploadPercentage: '0',
			progress: '',
		};
	}

	changeHandler = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	changeFileHandler = (e) => {
		this.setState({ file: e.target.files[0] });
		this.setState({ fileName: Date.now() + e.target.files[0].name });
	};

	submitHandler = async (e) => {
		e.preventDefault();
		// console.log(this.state.type)
		let formData = new FormData();
		formData.append('title', this.state.title);
		formData.append('file', this.state.file);
		formData.append('price', this.state.price);
		formData.append('name', this.state.name);
		formData.append('news', this.state.news);
		formData.append('email', this.state.email);
		formData.append('info', this.state.info);
		formData.append('phone', this.state.phone);
		formData.append('type', this.state.type);
		formData.append('fileName', this.state.fileName);

		const insert = async () => {
			const uploadTask = storage
				.ref(`/eCommerce/${this.state.fileName}`)
				.put(this.state.file);
			uploadTask.on(
				'state_changed',
				(snapshot) => {
					const progress = Math.round(
						(snapshot.bytesTransferred / snapshot.totalBytes) * 100,
					);
					this.setState({ progress: progress });
				},
				(error) => {
					console.log(error);
				},
				async (complete) => {
					try {
						const url = await storage
							.ref('eCommerce')
							.child(this.state.fileName)
							.getDownloadURL();
						formData.append('url', url);
						const res = await axios.post('/ecommerce/addEcommerce', formData, {
							headers: {
								'Content-Type': 'multipart/form-data',
							},
							onUploadProgress: (progressEvent) => {
								this.setState({
									uploadPercentage: parseInt(
										Math.round(
											(progressEvent.loaded * 100) / progressEvent.total,
										),
									),
								});
							},
						});
						if (this.state.uploadPercentage === 100) {
							this.setState({ message: 'Product Added!' });
						}
						console.log(this.state.uploadPercentage);
						console.log(res.data);
					} catch (err) {
						if (err.response.status === 500) {
							this.setState({
								message: 'There was a problem with the server!',
							});
							// console.log(err)
						} else if (err.response.status === 400) {
							this.setState({ message: 'Could not upload, try again later' });
						} else {
							this.setState({ message: err.response.data.msg });
							// console.log(err.response.data.msg)
						}
					}
				},
			);
		};

		if (this.state.file.length < 1) {
			insert();
		} else {
			if (this.state.file.type.split('/')[0] === 'image') {
				insert();
			} else {
				this.setState({ message: 'Select an image' });
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
				<button className='btn btn-primary mr-1 ml-1' onClick={this.openModal}>
					<AddIcon /> Add a Product
				</button>

				<Modal
					isOpen={this.state.isOpen}
					onRequestHide={this.hideModal}
					onRequestClose={this.hideModal}>
					<ModalHeader>
						{/* <ModalClose onClick={this.hideModal}/> */}
						Add Product
					</ModalHeader>
					<ModalBody>
						{/* <hr/> */}
						<Form onSubmit={this.submitHandler}>
							<Form.Group controlId='formBasicTitle'>
								{/* <Form.Label>Seminar Title</Form.Label> */}
								<Form.Control
									type='text'
									placeholder='Title'
									onChange={this.changeHandler}
									name='title'
									value={this.state.title}
									required
								/>
							</Form.Group>

							<Form.Group controlId='formBasicTitle'>
								{/* <Form.Label>Seminar Title</Form.Label> */}
								<Form.Control
									type='text'
									name='name'
									onChange={this.changeHandler}
									value={this.state.name}
									placeholder='Name'
									required
								/>
							</Form.Group>

							<Form.Group controlId='formBasicTitle'>
								{/* <Form.Label>Seminar Title</Form.Label> */}
								<Form.Control
									type='email'
									name='email'
									value={this.state.email}
									onChange={this.changeHandler}
									placeholder='Email'
									required
								/>
							</Form.Group>

							<Form.Group controlId='formBasicTitle'>
								{/* <Form.Label>Seminar Title</Form.Label> */}
								<Form.Control
									type='text'
									name='phone'
									value={this.state.phone}
									onChange={this.changeHandler}
									placeholder='Phone'
									required
								/>
							</Form.Group>

							<Form.Group controlId='formBasicTitle'>
								{/* <Form.Label>Seminar Title</Form.Label> */}
								<Form.Control
									type='text'
									name='price'
									value={this.state.price}
									onChange={this.changeHandler}
									placeholder='Price'
									required
								/>
							</Form.Group>

							<Form.Group controlId='exampleForm.ControlTextarea1'>
								<Form.Control
									as='textarea'
									rows='3'
									name='info'
									value={this.state.info}
									onChange={this.changeHandler}
									placeholder='Product Info'
									required
								/>
							</Form.Group>

							<Form.Group>
								<Form.File
									id='exampleFormControlFile1'
									type='file'
									onChange={this.changeFileHandler}
									accept='image/*'
									required
								/>
							</Form.Group>

							{/* <Form.Group id="formGridCheckbox">
    <Form.Check type="checkbox" name='type' label="Turn on for purchase, leave off for advertisement" />
  </Form.Group> */}

							<Form.Group controlId='exampleForm.SelectCustom'>
								<Form.Label>Product or Advertisement</Form.Label>
								<Form.Control
									value={this.state.type}
									name='type'
									onChange={this.changeHandler}
									as='select'
									custom>
									<option value='product'>Product</option>
									<option value='advertisement'>Advertisement</option>
								</Form.Control>
							</Form.Group>

							<p style={{ color: 'red' }}>
								<i>{this.state.message}</i>
							</p>
							<div className='mb-3'>
								<ProgressBar
									striped
									variant='success'
									now={this.state.progress}
									label={`${this.state.progress}%`}
								/>
							</div>
							<Button variant='primary' type='submit'>
								Add
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

export default ECommerceAdd;
