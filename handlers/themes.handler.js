export async function addTheme(req, res) {
    try {

        const theme = await this.prisma.theme.create({
            data: req.body
        })

        return {
            message: "Theme has been added",
            data: theme
        }

    } catch (err) {
        return res.code(400).send({ statusCode: 400, message: err.message });
    }
}

export async function getThemeDetail(req, res) {
    try {

        const theme = await this.prisma.theme.findUnique({
            where: {
                id: req.params.themeId
            }
        })

        return {
            message: "Theme has been deleted",
            data: theme
        }

    } catch (err) {
        return res.code(400).send({ statusCode: 400, message: err.message });
    }
}

export async function getThemes(req, res) {
    try {

        const themes = await this.prisma.theme.findMany()

        return {
            message: "Theme has been deleted",
            data: themes
        }

    } catch (err) {
        return res.code(400).send({ statusCode: 400, message: err.message });
    }
}

export async function removeTheme(req, res) {
    try {

        const theme = await this.prisma.theme.delete({
            data: req.params.themeId
        })

        return {
            message: "Theme has been deleted",
            data: theme
        }

    } catch (err) {
        return res.code(400).send({ statusCode: 400, message: err.message });
    }
}