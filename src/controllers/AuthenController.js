const passport = require('passport')
const UserModel = require('../models/UserModel')

class AuthenController {

    viewLogin(req, res, next) {
        res.render('authen/login', { layout: false })
    }

    checkLogin(req, res, next) {
        if (req.body.username == "admin" && req.body.password == "admin") {
            res.redirect('/admin')
        }
    }

    viewRegister(req, res) {
        res.render('authen/register', { layout: false })
    }

    // async checkRegister(req, res, next) {
    //     try {
    //         const user = User(req.body)
    //         await user.setPassword(req.body.password)
    //         await user.save()
    //         if (user._id)
    //             res.redirect('/account/login')
    //         else
    //             res.json({ message: 'Created failure :( !' });
    //     } catch (error) {
    //         throw new Error(error.message)
    //     }
    // }

    checkRegister(req, res, next) {
        let Users = new UserModel({
            email: req.body.email,
            username: req.body.fullname
        });

        UserModel.register(Users, req.body.password, function (err, user) {
            if (err)
                res.json({ success: false, message: "đăng ký thất bại", err })
            else
                res.json({ success: true, message: "đăng ký thành công" })
        });
    }
}

module.exports = new AuthenController();