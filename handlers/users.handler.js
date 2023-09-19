export async function createUser(req, res) {
    try {

        await this.prisma.user.create({
            data: req.body
        })

        return {
            message: "User has been created",
            data: req.body
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
            data: user
        }

    } catch (err) {
        return res.code(400).send({ statusCode: 400, message: err.message });
    }
}

export async function deleteUser(req, res) {
    try {
        
        const { userId } = req.params

        await this.prisma.user.delete({
            where: { id: userId }
        })

        return {
            message: "User has been deleted."
        }

    } catch (err) {
        return res.code(400).send({ statusCode: 400, message: err.message });
    }
}