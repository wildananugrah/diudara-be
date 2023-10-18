import { updateUser, getUserProfile, getUserByUsername } from "../handlers/users.handler.js"
import { updateUserSchema } from "../schema/users.schema.js"

const routes = async (app, options) => {

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

  app.route({
    method: 'GET',
    url: '/user-profile/:username',
    handler: getUserByUsername
  })

};

export default routes;