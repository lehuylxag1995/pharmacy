const userRouter = require('./user')
const adminRouter = require('./admin')
const authenRouter = require('./authentication')

function RouterConfig(app) {

    //Authentication
    app.use('/account', authenRouter)

    // Server
    app.use('/admin', adminRouter)

    // Client
    app.use('/', userRouter)
}

module.exports = RouterConfig