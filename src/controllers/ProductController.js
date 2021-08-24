
class ProductController {

    async getListProducts(req, res, next) {
        try {
            res.json('xin chào 1')
        } catch (error) {
            throw new Error(error.message)
        }
    }
}

module.exports = new ProductController();