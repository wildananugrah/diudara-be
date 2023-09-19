import { jwtEndpoint } from '../configs/common.config.js';
import fp from 'fastify-plugin';

export default fp(async (app, options) => {

    app.decorate('getUserToken', (authorization) => {
        try {
            return authorization.split(' ')[1]    
        } catch (err) {
            throw new Error(err.message)
        }
        
    })

    app.decorate('getToken', async (data) => {
        try {
            console.log(`${jwtEndpoint}/token`)
            console.log(data)
            const response = await fetch(`${jwtEndpoint}/token`, {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify(data)
            })

            if (!response.ok) throw new Error(`Error JWT status: ${response.status}`)

            return response.json()

        } catch (err) {
            throw new Error(err.message)
        }
    });

    app.decorate('validateToken', async (token) => {
        
        try {
            const response = await fetch(`${jwtEndpoint}/validate`, {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify({ token: token })
            })

            if (!response.ok) throw new Error(`Error JWT Token invalid: ${response.status}`)

            return await response.json()

        } catch (err) {
            console.log(err.message)
        }
    });

});