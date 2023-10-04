import { addTemplate, getTemplateDetail, getTemplates, removeTemplate } from "../handlers/templates.handler.js";

const routes = async (app, options) => {
    app.route({
        method: 'POST',
        url: '/templates',
        // schema: createProductSchema,
        handler: addTemplate
    });

    app.route({
        method: 'GET',
        url: '/templates',
        // schema: createProductSchema,
        handler: getTemplates
    });

    app.route({
        method: 'GET',
        url: '/templates/:templateId',
        // schema: createProductSchema,
        handler: getTemplateDetail
    });

    app.route({
        method: 'DELETE',
        url: '/templates/:templateId',
        // schema: createProductSchema,
        handler: removeTemplate
    });
}

export default routes;