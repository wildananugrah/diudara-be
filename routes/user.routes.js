import { createUser, loginUser } from "../handlers/users.handler.js";

const routes = async (app, options) => {
    app.route({
        method: 'POST',
        url: '/users',
        schema: {
            description: 'Create a new user',
            summary: 'Create a new user',
            tags: ['Users'],
            body: {
                type: "object",
                properties: {
                    email: {
                        type: "string",
                    },
                    name: {
                        type: "string"
                    },
                    password: {
                        type: "string"
                    }
                },
                additionalProperties: false,
                required: ['name', 'email']
            },
            response: {
              200: {
                description: 'Success Response',
                type: 'object',
                properties: { 
                  message: {
                    type: "string"
                  },
                  data: {
                    type: "object",
                    properties: {
                        email: {
                            type: "string",
                        },
                        name: {
                            type: "string"
                        }
                    },
                  }
                }
              }
            }
        },
        handler: createUser
    });

    app.route({
        method: 'POST',
        url: '/users/auth',
        schema: {
            description: 'User Login',
            summary: 'User Login',
            tags: ['Users'],
            body: {
                type: "object",
                properties: {
                    email: {
                        type: "string",
                    },
                    password: {
                        type: "string"
                    }
                },
                additionalProperties: false,
                required: ['email', 'password']
            },
            response: {
              200: {
                description: 'Success Response',
                type: 'object',
                properties: { 
                  message: {
                    type: "string"
                  },
                  data: {
                    type: "object",
                    properties: {
                        email: {
                            type: "string",
                        },
                        name: {
                            type: "string"
                        }
                    },
                  }
                }
              }
            }
        },
        handler: loginUser
    });
};

export default routes;