import { createProduct, deleteProduct, getProductById, getProductToken, getProducts, updateProduct } from "../handlers/products.handler.js";

const routes = async (app, options) => {
    app.route({
        method: 'POST',
        url: '/products',
        // schema: createProductSchema,
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

    app.route({
        method: 'PUT',
        url: '/products/:id',
        // schema: createProductSchema,
        handler: updateProduct
    });

    app.route({
        method: 'POST',
        url: '/products/token/:productId',
        handler: getProductToken
    })
}

export default routes;