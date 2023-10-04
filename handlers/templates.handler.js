export async function addTemplate(req, res) {
    try {

        const template = await this.prisma.template.create({
            data: req.body
        })

        return {
            message: "template has been added",
            data: template
        }

    } catch (err) {
        return res.code(400).send({ statusCode: 400, message: err.message });
    }
}

export async function getTemplateDetail(req, res) {
    try {

        const template = await this.prisma.template.findUnique({
            where: {
                id: req.params.templateId
            }
        })

        return {
            message: "Template has been retrieved",
            data: template
        }

    } catch (err) {
        return res.code(400).send({ statusCode: 400, message: err.message });
    }
}

export async function getTemplates(req, res) {
    try {

        const userToken = this.getUserToken(req.headers.authorization)
        const { data } = await this.validateToken(userToken)

        const templates = await this.prisma.template.findMany()
        const user = await this.prisma.user.findUnique({ where: { id: data.id } })

        let templatesResponse = []

        // TODO: I believe it can be improved as well. 
        for(let i = 0; i < templates.length; i++) {
            templatesResponse.push({ ...templates[i], active: templates[i].id === user.templateId ? 1 : 0 })
        }

        return {
            message: "Template has been retrieved",
            data: templatesResponse
        }

    } catch (err) {
        return res.code(400).send({ statusCode: 400, message: err.message });
    }
}

export async function removeTemplate(req, res) {
    try {

        await this.prisma.template.delete({
            where: {
                id: req.params.templateId
            }
        })

        return {
            message: "Template has been deleted"
        }

    } catch (err) {
        return res.code(400).send({ statusCode: 400, message: err.message });
    }
}