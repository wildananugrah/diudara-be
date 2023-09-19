export async function createUser(req, res) {
    try {

        const user = await this.prisma.user.create({
            data: req.body
        })

        return {
            message: "User has been created",
            data: user
        }

    } catch (err) {
        return res.code(400).send({ statusCode: 400, message: err.message });
    }
}

export async function loginUser(req, res) {
    try {

        const { email, password } = req.body

        const user = await this.prisma.user.findUnique({
            where: {
                email: email,
                password: password
            }
        })

        return {
            message: "User has been found",
            data: user,
            ...await this.getToken(user)
        }

    } catch (err) {
        return res.code(400).send({ statusCode: 400, message: err.message });
    }
}

export async function updateUser(req, res) {
    try {

        const { email, name } = req.body

        const userToken = this.getUserToken(req.headers.authorization)

        const { data } = await this.validateToken(userToken)

        await this.prisma.user.update({
            where: { id: data.id },
            data: {
                email, name
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

export async function deleteUser(req, res) {
    try {

        const userToken = this.getUserToken(req.headers.authorization)

        const { data } = await this.validateToken(userToken)

        await this.prisma.user.delete({
            where: { id: data.id }
        })

        return {
            message: "User has been deleted."
        }

    } catch (err) {
        return res.code(400).send({ statusCode: 400, message: err.message });
    }
}