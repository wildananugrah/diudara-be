export async function createProduct(req, res) {
    try {

        const userToken = this.getUserToken(req.headers.authorization)
        const { data } = await this.validateToken(userToken)

        const product = await this.prisma.product.create({
            data: { ...req.body, userId: data.id }
        })

        return {
            message: "Product has been created",
            data: product
        }
    } catch (err) {
        return res.code(400).send({ statusCode: 400, message: err.message });
    }
}

export async function getProducts(req, res) {
    try {
        const userToken = this.getUserToken(req.headers.authorization)
        const { data } = await this.validateToken(userToken)

        return {
            message: "Get all products",
            data: await this.prisma.product.findMany({
                where: { userId: data.id }
            })
        }
    } catch (err) {
        return res.code(400).send({ statusCode: 400, message: err.message });
    }
}

export async function getProductById(req, res) {
    try {
        // const userToken = this.getUserToken(req.headers.authorization)
        // const { data } = await this.validateToken(userToken)

        return {
            message: "Get ProductById",
            data: await this.prisma.product.findUnique({
                where: {
                    id: req.params.id,
                    // userId: data.id
                }
            })
        }
    } catch (err) {
        return res.code(400).send({ statusCode: 400, message: err.message });
    }
}

export async function deleteProduct(req, res) {
    try {
        const userToken = this.getUserToken(req.headers.authorization)
        const { data } = await this.validateToken(userToken)

        await this.prisma.product.delete({
            where: {
                id: req.params.id,
                userId: data.id
            }
        })

        return {
            message: "Product has been deleted."
        }
    } catch (err) {
        return res.code(400).send({ statusCode: 400, message: err.message });
    }
}

export async function updateProduct(req, res) {
    try {
        const userToken = this.getUserToken(req.headers.authorization)
        const { data } = await this.validateToken(userToken)

        const { name, description, status, image } = req.body

        await this.prisma.product.update({
            where: {
                id: req.params.id,
                userId: data.id
            },
            data: {
                name,
                description,
                status,
                image
            }
        })

        return {
            message: "User has been updated",
            data: req.body
        }
    } catch (err) {
        return res.code(400).send({ statusCode: 400, message: err.message });
    }
}

export async function getProductToken(req, res) {
    try {
        const userToken = this.getUserToken(req.headers.authorization)
        const { data } = await this.validateToken(userToken)
        const { productId } = req.params

        const productItems = await this.prisma.productItem.findMany({
            where: { productId: productId, userId: data.id }
        })

        console.log(productItems)

        const response = await fetch(`${process.env.JWT_ENDPOINT}/token`, {
            headers: { 'Content-Type': 'application/json' },
            method: 'POST',
            body: JSON.stringify({ id: data.id, files: productItems.map(item => item.path) })
        })

        const responseJson = await response.json()

        return {
            message: "Get All Product Items",
            token: responseJson.token,
            url: `${process.env.STORAGE_ENDPOINT}/file/download?token=${responseJson.token}`
        }
    } catch (err) {
        return res.code(400).send({ statusCode: 400, message: err.message });
    }
}