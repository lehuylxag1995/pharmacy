class ShopController {

    index(req, res, next) {
        res.render('client/shop')
    }

}
module.exports = new ShopController();