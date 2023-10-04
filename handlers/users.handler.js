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

        if (!user) return res.status(404).send({ statusCode: 400, message: 'invalid email or password' })

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

        const userToken = this.getUserToken(req.headers.authorization)

        const { data } = await this.validateToken(userToken)

        await this.prisma.user.update({
            where: { id: data.id },
            data: {
                ...req.body
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

export async function getUserProfile(req, res) {
    try {

        const userToken = this.getUserToken(req.headers.authorization)
        const { data } = await this.validateToken(userToken)

        const user = await this.prisma.user.findUnique({
            where: { id: data.id }
        })

        return {
            message: "User has been updated",
            data: user
        }

    } catch (err) {
        return res.code(400).send({ statusCode: 400, message: err.message });
    }
}

export async function getUserTemplate(req, res) {
    try {

        const { username } = req.params

        const user = await this.prisma.user.findUnique({
            where: { username: username }
        })

        const template = await this.prisma.template.findUnique({
            where: { id: user.templateId }
        })

        return {
            message: "User template has been retrieved",
            data: template
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

export async function updateTemplate(req, res) {
    try {

        const userToken = this.getUserToken(req.headers.authorization)
        const { data } = await this.validateToken(userToken)

        await this.prisma.user.update({
            where: { id: data.id },
            data: {
                templateId: req.body.templateId
            }
        })

        return {
            message: "User template has been updated."
        }

    } catch (err) {
        return res.code(400).send({ statusCode: 400, message: err.message });
    }
}