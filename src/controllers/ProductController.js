class ProductController {
    async getListProducts(req, res, next) {
        try {
            res.json('Danh sách sản phẩm')
        } catch (error) {
            throw new Error(error.message)
        }
    }
}

module.exports = new ProductController()
