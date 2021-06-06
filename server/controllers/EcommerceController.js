const Ecommerce = require('../models/Ecommerce');
const nodemailer = require('nodemailer');
const Purchase = require('../models/Purchase');

const addEcommerce = (req, res, next) => {
	const title = req.body.title;
	const name = req.body.name;
	const email = req.body.email;
	const phone = req.body.phone;
	const price = req.body.price;
	const info = req.body.info;
	const file = req.body.file;
	const type = req.body.type;
	const filename = req.body.fileName;
	const url = req.body.url;

	//     if(req.files){
	//         const file = req.files.file
	//         // console.log(file)
	//         var filename = Date.now() + file.name
	//         file.mv(`${__dirname}../../../client/src/assets/ecommerce/${filename}`,err => {
	//             if(err) {
	//                 console.error(err)
	//                 return res.status(500).send(err)
	//             }
	// })
	//     }
	//   else {
	//     var filename = 'datalink.png'
	//   }

	let data = new Ecommerce({
		title: title,
		name: name,
		file: filename,
		info: info,
		type: type,
		phone: phone,
		price: price,
		email: email,
		url: url,
	});
	data
		.save()
		.then(() => {
			res.json({ message: 'Product added successfully' });
		})
		.catch((err) => {
			res.status(400).send(err);
		});
};

const updateStock = (req, res, next) => {
	const stock = req.body.stock;

	Ecommerce.findOne({ _id: req.params.id })
		.then((request) => {
			request.stock = stock;
			request
				.save()
				.then(() => {
					res.status(200).send('Stock updated');
				})
				.catch(() => {
					res.status(500).send('Could not update');
				});
		})
		.catch((err) => {
			res.status(500).send('System error');
		});
};

const getEcommerce = (req, res, next) => {
	Ecommerce.find()
		.sort({ createdAt: -1 })
		.then((data) => {
			res.json(data);
		})
		.catch((err) => {
			res.status(404).send(err);
		});
};

const getSrcPurchase = (req, res, next) => {
	Purchase.find()
		.sort({ createdAt: -1 })
		.then((data) => {
			res.json(data);
		})
		.catch((err) => {
			res.status(404).send(err);
		});
};

const report = (req, res, next) => {
	const startDate = new Date(req.params.startDate).toISOString();
	const endDate = new Date(req.params.endDate).toISOString();
	const user = req.params.user;

	if (user === 'src') {
		Purchase.find({
			createdAt: {
				$gte: startDate,
				$lt: endDate,
			},
		})
			.sort({ createdAt: -1 })
			.then((data) => {
				res.status(200).json(data);
			})
			.catch((err) => {
				res.status(404).send(err);
			});
	} else {
		Purchase.find({
			$and: [
				{ user: user },
				{
					createdAt: {
						$gte: startDate,
						$lt: endDate,
					},
				},
			],
		})
			.sort({ createdAt: -1 })
			.then((data) => {
				res.status(200).json(data);
			})
			.catch((err) => {
				res.status(404).send(err);
			});
	}
};

const getStudentPurchase = (req, res, next) => {
	Purchase.find({ $and: [{ user: req.params.user }, { delete: false }] })
		.sort({ createdAt: -1 })
		.then((data) => {
			res.json(data);
		})
		.catch((err) => {
			res.status(404).send(err);
		});
};

const deleteEcommerce = (req, res, next) => {
	Ecommerce.findOneAndDelete({ _id: req.params.id }, function (err, result) {
		if (err) {
			res.status(500).send(err);
		}
		if (result) {
			res.status(200).send();
		}
	});

	// if (req.params.file !== 'datalink.png'){
	//     const fs = require('fs')
	//     fs.unlink(`${__dirname}../../../client/src/assets/ecommerce/${req.params.file}`, (err) => {
	//         if (err) throw err
	//         // console.log('Successful')
	//     })
	// }
};

const deleteStudentPurchase = (req, res, next) => {
	// Purchase.findOneAndDelete({ _id: req.params.id }, function (err, result) {
	// 	if (err) {
	// 		res.status(500).send(err);
	// 	}
	// 	if (result) {
	// 		res.status(200).send(result);
	// 	}
	// });

	Purchase.findOne({ _id: req.params.id })
		.then((request) => {
			request.delete = true;
			request
				.save()
				.then(() => {
					res.status(200).send('Purchase Deleted');
				})
				.catch(() => {
					res.status(400).send("Can't delete");
				});
		})
		.catch((err) => {
			res.status(500).send("Can't delete");
		});
};

const deleteSrcPurchase = (req, res, next) => {
	if (req.params.user === 'src') {
		Purchase.findOneAndDelete({ _id: req.params.id }, function (err, result) {
			if (err) {
				res.status(500).send(err);
			}
			if (result) {
				res.status(200).send(result);
			}
		});
	} else {
		Purchase.findOne({ _id: req.params.id })
			.then((request) => {
				request.delete = true;
				request
					.save()
					.then(() => {
						res.status(200).send('Purchase Deleted');
					})
					.catch(() => {
						res.status(400).send("Can't delete");
					});
			})
			.catch((err) => {
				res.status(500).send("Can't delete");
			});
	}
};

const searchEcommerce = (req, res, next) => {
	// News.find($or[{title:{ $regex: req.params.id}}, {type:{$regex : req.params.type}}], function(err, result) {
	Ecommerce.find({ title: { $regex: req.params.id } }, function (err, result) {
		if (err) {
			res.status(500).send(err);
		}
		if (result) {
			res.json(result);
		}
	});
};

const typeEcommerce = (req, res, next) => {
	Ecommerce.find({ type: { $regex: req.params.type } }, function (err, result) {
		if (err) {
			res.status(500).send(err);
		}
		if (result) {
			res.json(result);
		}
	});
};

const purchaseEcommerce = (req, res, next) => {
	const name = req.body.name;
	const email = req.body.email;
	const phone = req.body.phone;
	const info = req.body.info;
	const product = req.body.product;
	const price = req.body.price;
	const user = req.body.user;

	let data = new Purchase({
		name: name,
		info: info,
		phone: phone,
		price: price,
		email: email,
		product: product,
		user: user,
		delete: false,
	});
	data
		.save()
		.then(() => {
			res.json({ message: 'Product added successfully' });
		})
		.catch((err) => {
			res.status(400).send(err);
		});

	// let transporter = nodemailer.createTransport({
	//     host: "smtp.ethereal.email",
	//     port: 587,
	//     secure: false, // true for 465, false for other ports
	//     auth: {
	//       user: 'kallie90@ethereal.email', // generated ethereal user
	//       pass: 'u6Qt43Y3K8jUkPfhD3', // generated ethereal password
	//     },
	//   })

	//   // send mail with defined transport object
	//   let info = transporter.sendMail({
	//     from: '"Datalink SRC - Ecommerce" <innocentanyaele@gmail.com>', // sender address
	//     to: email, // list of receivers
	//     subject: "Datalink Src E-commerce", // Subject line
	//     // text:  message, // plain text body
	//     html: `<p>You have a new purchase request from Datalink SRC E-commerce</p>
	//     <h3>Purchase Details</h3>
	//     <ul>
	//     <li> Name : ${name} </li>
	//     <li> Phone: ${phone} </li>
	//     <li> Email: ${email} </li>
	//     <li> Product: ${product} </li>
	//     <li> Info: ${message} </li>
	//      </ul>`, // html body

	//   }, function(err, result) {
	//       if(err) {
	//           res.status(500).send()
	//       }
	//       if(result) {
	//           res.status(200).send()
	//       }
	//   } )
};

module.exports = {
	addEcommerce,
	getEcommerce,
	deleteEcommerce,
	searchEcommerce,
	typeEcommerce,
	purchaseEcommerce,
	updateStock,
	getSrcPurchase,
	deleteSrcPurchase,
	getStudentPurchase,
	deleteStudentPurchase,
	report,
};
