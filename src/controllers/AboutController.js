class AboutController {
    //GET http://localhost:3000/about
    index(req, res, next) {
        res.render('client/about')
    }

    //GET http://localhost:3000/admin/about
    listAbout(req, res, next) {
        res.render('server/list-about', {
            classActiveAbout: req.url == '/about' ? 'active' : '',
        })
    }

    //GET http://localhost:3000/admin/about/add
    viewAddAbout(req, res, next) {
        res.render('server/add-about', {
            classActiveAbout: req.url == '/about' ? 'active' : '',
        })
    }
}
module.exports = new AboutController()
