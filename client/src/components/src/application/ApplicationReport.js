import React from 'react';
import axios from 'axios';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

function ApplicationReport() {
	const report = async () => {
		try {
			const res = await axios.get('application/getApplication');
			if (res.data.length <= 0) {
				alert('There are no applications');
			} else {
				alert('Your report is being downloaded.');
				const unit = 'pt';
				const size = 'A4';
				const orientation = 'potrait';
				const marginLeft = 40;
				const doc = new jsPDF(orientation, unit, size);
				doc.setFontSize(15);
				const title = `Application Report`;
				const headers = [
					[
						'ID',
						'NAME',
						'DEPARTMENT',
						'POSITION',
						'CONTACT',
						'EMAIL',
						'REFERENCE',
						'DATE',
					],
				];

				// const data = this.state.people.map((elt) => [elt.name, elt.profession]);

				const data = res.data.map((d) => [
					d.ID,
					d.name,
					d.department,
					d.position,
					d.contact,
					d.email,
					d.reference,
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
				alert('Something went wrong');
			}
		}
	};

	return (
		<div>
			<button className='btn btn-primary' onClick={report}>
				Generate Report
			</button>
		</div>
	);
}

export default ApplicationReport;
