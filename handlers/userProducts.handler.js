
export async function getProducts(req, res) {
    try {

        const { username } = req.params
        const user = await this.prisma.user.findUnique({
            where: {
                username: username
            }
        })

        return {
            message: "Get all products",
            data: await this.prisma.product.findMany({
                where: { userId: user.id, status: true },
                include: {
                    productItems: true
                }
            })
        }
    } catch (err) {
        return res.code(400).send({ statusCode: 400, message: err.message });
    }
}

export async function getProductById(req, res) {
    try {
        const { username, productId } = req.params
        const user = await this.prisma.user.findUnique({
            where: {
                username: username
            }
        })

        return {
            message: "Get ProductById",
            data: await this.prisma.product.findUnique({
                where: {
                    id: productId,
                    userId: user.id
                }
            })
        }
    } catch (err) {
        return res.code(400).send({ statusCode: 400, message: err.message });
    }
}

export async function postUserCollectProduct(req, res) {
    try {
        const userToken = this.getUserToken(req.headers.authorization)
        const { data } = await this.validateToken(userToken)

        const { productId } = req.body

        var userProduct = await this.prisma.userProductCollection.findMany({
            where: {
                productId: productId, userId: data.id
            }
        })

        if (userProduct.length !== 0) {
            return res.code(400).send({
                message: "You've already had this product",
                data: userProduct
            })
        }
        else {
            userProduct = await this.prisma.userProductCollection.create({
                data: { productId: productId, userId: data.id }
            })

            return {
                message: "The product has been collected.",
                data: userProduct
            }
        }

    } catch (err) {
        return res.code(400).send({ statusCode: 400, message: err.message });
    }
}