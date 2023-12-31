import { deleteUserCollectProduct, getProductById, getProducts, getUserCollectProduct, getUserCollectProductDetail, postUserCollectProduct } from "../handlers/userProducts.handler.js";

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

    app.route({
        method: 'POST',
        url: '/userProducts',
        handler: postUserCollectProduct
    })

    app.route({
        method: 'GET',
        url: '/userProducts',
        handler: getUserCollectProduct
    })

    app.route({
        method: 'DELETE',
        url: '/userProducts/:id',
        handler: deleteUserCollectProduct
    })

    app.route({
        method: 'GET',
        url: '/userProducts/detail/:id',
        handler: getUserCollectProductDetail
    })
}

export default routes;