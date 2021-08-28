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
        })
    }

    //GET http://localhost:3000/admin/about/add
    viewAddAbout(req, res, next) {
        res.render('server/add-about', {
            classActiveAbout: req.path == '/about/add' ? 'active' : '',
        })
    }

    //POST http://localhost:3000/admin/about/store
    store(req, res, next) {
        AboutModel.create(req.body)
            .then((about) => {
                res.redirect('/admin/about')
            })
            .catch((err) => {
                res.json({ status: 'error', message: err })
            })
    }
}
module.exports = new AboutController()
