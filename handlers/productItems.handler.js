export async function addProductItem(req, res) {
    try {

        const userToken = this.getUserToken(req.headers.authorization)
        const { data } = await this.validateToken(userToken)
        const { productId } = req.params

        const productItem = await this.prisma.productItem.create({
            data: { ...req.body, userId: data.id, productId: productId }
        })

        return {
            message: "Product Item has been created",
            data: productItem
        }
    } catch (err) {
        return res.code(400).send({ statusCode: 400, message: err.message });
    }
}

export async function getProductItems(req, res) {
    try {

        const userToken = this.getUserToken(req.headers.authorization)
        const { data } = await this.validateToken(userToken)
        const { productId } = req.params

        const productItems = await this.prisma.productItem.findMany({
            where: { productId: productId, userId: data.id }
        })

        return {
            message: "Get All Product Items",
            data: productItems
        }
    } catch (err) {
        return res.code(400).send({ statusCode: 400, message: err.message });
    }
}

export async function deleteProductItem(req, res) {
    try {

        const userToken = this.getUserToken(req.headers.authorization)
        const { data } = await this.validateToken(userToken)
        const { productId, productItemId } = req.params

        await this.prisma.productItem.delete({
            where: {
                userId: data.id,
                productId: productId, 
                id: productItemId
            }
        })

        return {
            message: "Product Item has been deleted"
        }
    } catch (err) {
        return res.code(400).send({ statusCode: 400, message: err.message });
    }
}