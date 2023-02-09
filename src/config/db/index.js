const mongoose = require('mongoose');

async function connectToDB() {
    try {
        await mongoose.set("strictQuery", false);
        await mongoose.connect('mongodb://127.0.0.1:27017/f8_courses',{
        });
        console.log('Connect successfully!!!');
    } catch (error) {
        console.log('Connect failed!!!');
    }
}

module.exports = { connectToDB };
