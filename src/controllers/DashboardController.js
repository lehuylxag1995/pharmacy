class DashboardController {
    index(req, res) {
        res.render('server/home')
    }
}

module.exports = new DashboardController()
