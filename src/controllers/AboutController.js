const AboutModel = require('../models/AboutModel')

class AboutController {
    //GET http://localhost:3000/about
    index(req, res, next) {
        res.render('client/about')
    }

    //GET http://localhost:3000/admin/about
    listAbout(req, res, next) {
        res.render('server/list-about', {
            classActiveAbout: req.path == '/about' ? 'active' : '',
            message: req.flash('success'),
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
        AboutModel.create(req.body)
            .then((about) => {
                req.flash('success', 'Thêm bản ghi mới thành công')
                res.redirect('/admin/about')
            })
            .catch((err) => {
                req.flash('storeError', err.message)
                res.redirect('back')
            })
    }
}
module.exports = new AboutController()
