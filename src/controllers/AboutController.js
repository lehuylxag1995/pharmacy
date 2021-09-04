const AboutModel = require('../models/AboutModel')
const uploadFile = require('../middlewares/upload')

class AboutController {
    //GET http://localhost:3000/about
    index(req, res, next) {
        res.render('client/about')
    }

    //GET http://localhost:3000/admin/about
    async listAbout(req, res, next) {
        let listAbout = await AboutModel.find({}).lean()
        listAbout.map((about) => {
            about.image = `/client/assets/img/${about.image}`
        })
        res.render('server/list-about', {
            listAbout,
            classActiveAbout: req.path == '/about' ? 'active' : '',
            messageStatus: req.flash('success'),
        })
    }

    //GET http://localhost:3000/admin/about/add
    viewAddAbout(req, res, next) {
        res.render('server/add-about', {
            classActiveAbout: req.path == '/about/add' ? 'active' : '',
            messageStatus: req.flash('storeError'),
        })
    }

    //POST http://localhost:3000/admin/about/store
    store(req, res, next) {
        uploadFile(req, res)
            .then(() => {
                req.body.image = req.file.filename
            })
            .then(() => {
                AboutModel.create(req.body)
                    .then(() => {
                        req.flash('success', 'Thêm bản ghi mới thành công')
                        res.redirect('/admin/about')
                    })
                    .catch((err) => {
                        req.flash('storeError', err.message)
                        res.redirect('back')
                    })
            })
            .catch((error) => {
                req.flash('storeError', error)
                res.redirect('back')
            })
    }
}
module.exports = new AboutController()
