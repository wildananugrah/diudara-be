const createProductSchema = {
    description: 'Create a new Product',
    summary: 'Create a new Product',
    tags: ['Products'],
    body: {
        type: "object",
        properties: {
            name: {
                type: "string"
            },
            description: {
                type: "string"
            }
        },
        additionalProperties: false,
        required: ['name', 'description']
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
                        name: {
                            type: "string"
                        },
                        description: {
                            type: "string"
                        }
                    },
                }
            }
        }
    }
}

export {
    createProductSchema
}