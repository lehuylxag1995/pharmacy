const util = require('util')
const path = require('path')
const multer = require('multer')

//config storage image
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(`${__dirname}/../../src/public/client/assets/img`))
    },
    filename: function (req, file, cb) {
        const match = [
            'image/png',
            'image/jpeg',
            'image/jpg',
            'image/svg+xml',
            'image/gif',
        ]
        if (match.indexOf(file.mimetype) === -1) {
            var message = `${file.originalname} định dạng không hợp lệ. chỉ chấp nhận png/jpeg/svg/gif.`
            return cb(message, null)
        }
        var filename = `${Date.now()}-lehuy-${file.originalname}`
        cb(null, filename)
    },
})

//set update 1 file with input tag is type=file in req.file
var upload = multer({ storage: storage }).single('image')

//can be used with async-await.
var uploadFileMiddleware = util.promisify(upload)

module.exports = uploadFileMiddleware
