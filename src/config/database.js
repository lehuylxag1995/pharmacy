const mongoose = require('mongoose')
async function connectDatabase() {
    try {
        await mongoose.connect('mongodb://localhost:27017/pharmacy', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000,
        })
        console.log('Database Connected!')
    } catch (error) {
        console.error(error.reason)
    }
}
module.exports = connectDatabase
