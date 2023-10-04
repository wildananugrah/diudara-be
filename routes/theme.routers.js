import { addTheme, getThemeDetail, getThemes, removeTheme } from "../handlers/themes.handler.js";

const routes = async (app, options) => {
    app.route({
        method: 'POST',
        url: '/themes',
        // schema: createProductSchema,
        handler: addTheme
    });

    app.route({
        method: 'GET',
        url: '/themes',
        // schema: createProductSchema,
        handler: getThemes
    });

    app.route({
        method: 'GET',
        url: '/themes/:themeId',
        // schema: createProductSchema,
        handler: getThemeDetail
    });

    app.route({
        method: 'DELETE',
        url: '/themes/:themeId',
        // schema: createProductSchema,
        handler: removeTheme
    });
}

export default routes;