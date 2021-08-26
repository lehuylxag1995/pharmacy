const homeRouter = require('./home')
const productRouter = require('./product')
const adminRouter = require('./admin')
const authenRouter=require('./authentication')

function RouterConfig(app) {

    //Authentication
    app.use('/account',authenRouter)

    // Server
    app.use('/admin', adminRouter)

    // Client
    app.use('/product', productRouter)
    app.use('/', homeRouter)
    
}

module.exports = RouterConfig