const mongoose = require('mongoose');

const HajjSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: [true, 'First name is required']
    },
    lastname: {
        type: String,
        required: [true, 'Last name is required']
    },
    phone: {
        type: String,
        required: [true, 'Phone number is required'],
        match: [/^0\d{9}$/, 'Please provide a valid phone number'],
        unique: true
    },
    birthdate: {
        type: Date,
        required: [true, 'Please provide your birth date']
    },
    gender: {
        type: String,
        default: 'male',
    },
    passport: {
        type: String,
        required: [true, 'Please provide your passport number'],
        unique: true
    },
    nationality: {
        type: String,
        default: 'Algerian'
    },
    email: {
        type: String
    },
    demandeDe: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true });

module.exports = mongoose.model('Hajj', HajjSchema);
