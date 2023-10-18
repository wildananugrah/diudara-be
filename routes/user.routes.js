import { createUser, loginUser, deleteUser, loginWithGmail, registerWithGmail } from "../handlers/users.handler.js"
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
    url: '/users',
    schema: deleteUserSchema,
    handler: deleteUser
  })

  app.route({
    method: 'GET',
    url: '/users/auth/gmail',
    // schema: loginUserSchema,
    handler: loginWithGmail
  });

  app.route({
    method: 'POST',
    url: '/users/gmail',
    // schema: createUserSchema,
    handler: registerWithGmail
  });

};

export default routes;