const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    userId: { type: String, required: false},
    price: { type: Number, required: true },
    inStock: { type: Boolean, required: true},


});

module.exports = mongoose.model('Product', productSchema);
