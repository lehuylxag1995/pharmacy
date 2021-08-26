class AboutController {

    index(req, res, next) {
        res.render('client/about')
    }

}
module.exports = new AboutController();