
const mongoose = require('mongoose');
// const { Mongoose } = require('mongoose');
const config = require('config');   
const db = config.get('mongoURL')

const connectDB = async ()=> {
    try {
       await mongoose.connect(db); 
        console.log('MongoDB Connected') 
    } catch (er) {
        console.error(err.message);
        process.exit(1)
    }

};
 
module.exports = connectDB;