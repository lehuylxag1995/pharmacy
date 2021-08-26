class HomeController {
    index(req, res, next) {
        res.render('client/home')
    }
}
module.exports = new HomeController()
