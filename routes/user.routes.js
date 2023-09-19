import { createUser, loginUser, deleteUser } from "../handlers/users.handler.js"
import { createUserSchema, loginUserSchema, deleteUserSchema } from "../schema/users.schema.js"

const routes = async (app, options) => {
  app.route({
    method: 'POST',
    url: '/users',
    schema: createUserSchema,
    handler: createUser
  });

  app.route({
    method: 'POST',
    url: '/users/auth',
    schema: loginUserSchema,
    handler: loginUser
  });

  app.route({
    method: 'DELETE',
    url: '/users/:userId',
    schema: deleteUserSchema,
    handler: deleteUser
  })
};

export default routes;