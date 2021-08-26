const mongoose = require('mongoose');
async function connectDatabase() {
    try {
        await mongoose.connect('mongodb://localhost:27017/pharmacy', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Database Connected!')
    } catch (error) {
        throw new Error(error.message)
    }
}
module.exports = connectDatabase

