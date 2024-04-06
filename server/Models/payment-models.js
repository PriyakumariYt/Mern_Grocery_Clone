// // models/payment.js
// const mongoose = require('mongoose');

// const paymentSchema = new mongoose.Schema({
//   cardNumber: {
//     type: String,
//     required: true
//   },
//   expiryDate: {
//     type: String,
//     required: true
//   },
//   cvv: {
//     type: String,
//     required: true
//   },
//   cardHolderName: {
//     type: String,
//     required: true
//   }
// });

// const Payment = mongoose.model('Payment', paymentSchema);

// module.exports = Payment;

const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    cardNumber: {
        type: String,
        required: true
    },
    expiryDate: {
        type: String,
        required: true
    },
    cvv: {
        type: String,
        required: true
    },
    cardHolderName: {
        type: String,
        required: true
    }
});

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;
