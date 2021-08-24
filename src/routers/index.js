const productRouter = require('./product')

function RouterConfig(app) {
    app.use('/product', productRouter)
}

module.exports = RouterConfig