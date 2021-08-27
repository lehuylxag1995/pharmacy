class AdminController {
    index(req, res) {
        res.render('server/home', {
            classActiveHome: req.url == '/' ? 'active' : '',
        })
    }

    listAbout(req, res, next) {
        res.render('server/about', {
            classActiveAbout: req.url == '/about' ? 'active' : '',
        })
    }
}

module.exports = new AdminController()
