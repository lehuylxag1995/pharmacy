const mongoose = require('mongoose')
const Schema = mongoose.Schema

const aboutSchema = new Schema(
    {
        name: {
            type: String,
            unique: true,
            required: [true, 'Vui lòng nhập thông tin'],
            trim: true,
        },
        image: {
            type: String,
            unique: true,
            required: [true, 'Vui lòng chọn hình ảnh'],
        },
        sloganAbout: { type: String },
        sloganService: { type: String },
        sloganBrand: { type: String },
        active: { type: Boolean, default: true },
    },
    { timestamps: true }
)

//middleware pre

aboutSchema.pre('save', function (next) {
    var self = this
    mongoose
        .model('About')
        .findOne({ name: self.name }, function (error, about) {
            if (error) {
                next(error)
            } else if (about) {
                self.invalidate('about', 'name trùng')
                next(new Error('Tên bạn vừa nhập bị trùng'))
            } else next()
        })
    next()
})

module.exports = mongoose.model('About', aboutSchema)
