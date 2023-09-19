const createUserSchema = {
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
                        },
                        id: {
                            type: "string"
                        }
                    },
                }
            }
        }
    }
}

const deleteUserSchema = {
    response: {
        200: {
            description: 'Success Delete REsponse',
            type: 'object',
            properties: {
                message: {
                    type: "string"
                }
            }
        }
    }
}

const loginUserSchema = {
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
                },
                token: {
                    type: "string"
                },
                expired: {
                    type: "number"
                }
            }
        }
    }
}

const updateUserSchema = {
    description: 'Update a new user',
    summary: 'Update a new user',
    tags: ['Users'],
    body: {
        type: "object",
        properties: {
            email: {
                type: "string",
            },
            name: {
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
}

export {
    createUserSchema,
    deleteUserSchema,
    loginUserSchema,
    updateUserSchema,
}