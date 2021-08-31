const mongoose = require('mongoose')
const Schema = mongoose.Schema

const aboutSchema = new Schema(
    {
        name: {
            type: String,
            unique: true,
            required: [true, 'Chưa nhập tên giới thiệu'],
            trim: true,
        },
        image: {
            type: String,
            unique: true,
            required: [true, 'Chưa chọn hình giới thiệu'],
        },
        sloganAbout: { type: String },
        sloganService: { type: String },
        sloganBrand: { type: String },
        active: { type: Boolean, default: true },
    },
    { timestamps: true }
)

module.exports = mongoose.model('About', aboutSchema)
