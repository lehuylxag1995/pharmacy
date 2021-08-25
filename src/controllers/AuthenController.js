class AuthenController{

    viewLogin(req, res, next){
        res.render('client/login')
    }

}

module.exports = new AuthenController();