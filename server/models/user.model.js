const mongoose = require('mongoose')

const User = new mongoose.Schema(
	{
		name: { type: String, required: true ,trim:true,
			min:3,
			max:20},
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		quote: { type: String },
	},
	{ collection: 'user-data' }
)

const model = mongoose.model('UserData', User)

module.exports = model
