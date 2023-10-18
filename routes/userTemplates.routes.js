import { updateTemplate, getUserTemplate } from "../handlers/users.handler.js"

const routes = async (app, options) => {

  app.route({
    method: 'PUT',
    url: '/user-template',
    handler: updateTemplate
  })

  app.route({
    method: 'GET',
    url: '/:username/template',
    handler: getUserTemplate
  })

};

export default routes;