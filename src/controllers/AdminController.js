class AdminController {
    //GET http://localhost:3000/admin
    index(req, res) {
        res.render('server/dashboard', {
            classActiveHome: req.url == '/' ? 'active' : '',
        })
    }
}

module.exports = new AdminController()
