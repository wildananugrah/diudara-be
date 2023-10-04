import { getProductById, getProducts } from "../handlers/userProducts.handler.js";

const routes = async (app, options) => {

    app.route({
        method: 'GET',
        url: '/userProducts/:username',
        // schema: createProductSchema,
        handler: getProducts
    });

    app.route({
        method: 'GET',
        url: '/userProducts/:username/:productId',
        // schema: createProductSchema,
        handler: getProductById
    });
}

export default routes;