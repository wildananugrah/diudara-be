import { createUser, loginUser, deleteUser, updateUser, getUserProfile } from "../handlers/users.handler.js"
import { createUserSchema, loginUserSchema, deleteUserSchema, updateUserSchema } from "../schema/users.schema.js"

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
    method: 'PUT',
    url: '/user-profile',
    schema: updateUserSchema,
    handler: updateUser
  })

  app.route({
    method: 'GET',
    url: '/user-profile',
    // schema: updateUserSchema,
    handler: getUserProfile
  })
};

export default routes;