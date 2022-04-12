const mongoose = require('mongoose');
async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/thuexe');
        console.log('Connected to mongodb');
    } catch (error) {
        console.log('Error: ', error.message);
    }
}
module.exports = { connect };