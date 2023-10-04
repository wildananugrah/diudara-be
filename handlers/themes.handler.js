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
            message: "Theme has been retrieved",
            data: theme
        }

    } catch (err) {
        return res.code(400).send({ statusCode: 400, message: err.message });
    }
}

export async function getThemes(req, res) {
    try {

        const userToken = this.getUserToken(req.headers.authorization)
        const { data } = await this.validateToken(userToken)

        const themes = await this.prisma.theme.findMany()

        let themesResponse = []

        for(let i = 0; i < themes.length; i++) {
            const userTheme = await this.prisma.user.findUnique({ where: { themeId: themes[i].id, id: data.id } })
            themesResponse.push({ ...themes[i], active: userTheme === null ? 0 : 1 })
        }

        // themes.map(async (theme) => {
        //     const userTheme = await this.prisma.user.findUnique({ where: { themeId: theme.id, id: data.id } })
        //     themesResponse.push({ ...theme, active: userTheme === null ? 0 : 1 })
        // })

        return {
            message: "Theme has been retrieved",
            data: themesResponse
        }

    } catch (err) {
        return res.code(400).send({ statusCode: 400, message: err.message });
    }
}

export async function removeTheme(req, res) {
    try {

        await this.prisma.theme.delete({
            where: {
                id: req.params.themeId
            }
        })

        return {
            message: "Theme has been deleted"
        }

    } catch (err) {
        return res.code(400).send({ statusCode: 400, message: err.message });
    }
}