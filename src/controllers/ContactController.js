class ContactController {

    index(req, res, next) {
        res.render('client/contact')
    }

}
module.exports = new ContactController();