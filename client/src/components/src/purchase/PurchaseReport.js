import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
// import Modal from 'react-modal'
// import ModalHeader from 'react-bootstrap/ModalHeader';
// import ModalBody from 'react-bootstrap/ModalBody';
// import ModalFooter from 'react-bootstrap/ModalFooter';
// import ModalTitle from 'react-bootstrap/ModalTitle'
import { Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';
// import AddIcon from '@material-ui/icons/Add';
import axios from 'axios';

import jsPDF from 'jspdf';
import 'jspdf-autotable';

// Modal.setAppElement('#root')

class PurchaseReport extends Component {
	constructor(props) {
		super(props);

		this.state = {
			startDate: '',
			endDate: '',
			message: '',
		};
	}

	changeHandler = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	submitHandler = async (e) => {
		e.preventDefault();

		console.log(this.state.startDate);
		console.log(this.state.endDate);

		try {
			const res = await axios.get(
				`ecommerce/report/${localStorage.getItem('studentUser')}&${
					this.state.startDate
				}&${this.state.endDate}`,
			);
			if (res.data.length <= 0) {
				alert('There are no reports between this date');
			} else {
				alert('Your report is being downloaded.');
				const unit = 'pt';
				const size = 'A4';
				const orientation = 'potrait';
				const marginLeft = 40;
				const doc = new jsPDF(orientation, unit, size);
				doc.setFontSize(15);
				const title = `Purchase Report between ${this.state.startDate} and ${this.state.endDate}`;
				const headers = [
					['NAME', 'ID', 'EMAIL', 'PHONE', 'PRICE', 'PRODUCT', 'DATE'],
				];

				// const data = this.state.people.map((elt) => [elt.name, elt.profession]);

				const data = res.data.map((d) => [
					d.name,
					d.user,
					d.email,
					d.phone,
					d.price,
					d.product.map((p) => [p.title]),
					d.createdAt,
				]);

				let content = {
					startY: 50,
					head: headers,
					body: data,
				};

				doc.text(title, marginLeft, 40);
				doc.autoTable(content);
				doc.save('report.pdf');
			}
		} catch (err) {
			if (err.response.status === 500) {
				this.setState({ message: 'There was a problem with the server!' });
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
		// window.location.reload(false);
	};

	render() {
		return (
			<div>
				<button className='btn btn-primary m-3' onClick={this.openModal}>
					Generate Report
				</button>

				<Modal
					isOpen={this.state.isOpen}
					onRequestHide={this.hideModal}
					onRequestClose={this.hideModal}>
					<ModalHeader>
						{/* <ModalClose onClick={this.hideModal}/> */}
						Generate Report
					</ModalHeader>
					<ModalBody>
						{/* <hr/> */}
						<Form onSubmit={this.submitHandler}>
							<Form.Group controlId='formBasicTitle'>
								<Form.Label>Start Date</Form.Label>
								<Form.Control
									type='date'
									onChange={this.changeHandler}
									name='startDate'
									value={this.state.startDate}
									required
								/>
							</Form.Group>

							<Form.Group controlId='formBasicTitle'>
								<Form.Label>End Date</Form.Label>
								<Form.Control
									type='date'
									onChange={this.changeHandler}
									name='endDate'
									value={this.state.endDate}
									required
								/>
							</Form.Group>

							<p style={{ color: 'red' }}>
								<i>{this.state.message}</i>
							</p>

							<Button variant='primary' type='submit'>
								Generate
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

export default PurchaseReport;
