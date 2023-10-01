import { addProductItem, deleteProductItem, getProductItems } from "../handlers/productItems.handler.js";

const routes = async (app, options) => {
    app.route({
        method: 'POST',
        url: '/product-items/:productId',
        // schema: createProductSchema,
        handler: addProductItem
    });

    app.route({
        method: 'GET',
        url: '/product-items/:productId',
        // schema: createProductSchema,
        handler: getProductItems
    });

    app.route({
        method: 'DELETE',
        url: '/product-items/:productId/:productItemId',
        // schema: createProductSchema,
        handler: deleteProductItem
    });
}

export default routes;