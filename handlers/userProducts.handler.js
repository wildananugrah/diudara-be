
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
                where: { userId: user.id }
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