const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const purchaseSchema = new Schema(
	{
		user: {
			type: String,
		},
		name: {
			type: String,
		},
		email: {
			type: String,
		},
		phone: {
			type: 'String',
		},
		info: {
			type: 'String',
		},
		product: [],
		price: {
			type: Number,
		},
		delete: Boolean,
	},
	{ timestamps: true },
);

purchaseSchema.index({ expireAt: 1 }, { expireAfterSeconds: 2628000 });

const Purchase = mongoose.model('purchase', purchaseSchema);
module.exports = Purchase;
