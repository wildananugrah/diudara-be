import { createProduct, deleteProduct, getProductById, getProducts } from "../handlers/products.handler.js";
import { createProductSchema } from "../schema/products.schema.js";

const routes = async (app, options) => {
    app.route({
        method: 'POST',
        url: '/products',
        schema: createProductSchema,
        handler: createProduct
    });

    app.route({
        method: 'GET',
        url: '/products',
        // schema: createProductSchema,
        handler: getProducts
    });

    app.route({
        method: 'GET',
        url: '/products/:id',
        // schema: createProductSchema,
        handler: getProductById
    });

    app.route({
        method: 'DELETE',
        url: '/products/:id',
        // schema: createProductSchema,
        handler: deleteProduct
    });
}

export default routes;