# uiserver
Provide static content and routing to front-end UI components

[![Dependency](https://img.shields.io/david/expressjs/express.svg)](https://github.com/lifengli/uiserver)
[![license](https://img.shields.io/npm/l/express.svg)](https://github.com/lifengli/uiserver)
[![Maintenance](https://img.shields.io/maintenance/yes/2017.svg)](https://github.com/lifengli/uiserver)
[![Pull](https://img.shields.io/badge/pull%20request-welcome-ff69b4.svg)](https://github.com/lifengli/uiserver)

## serve static content via proxy
pulic/
> public/fonts

> public/images

> public/javascripts

> public/stylesheets

## provide routes in two formats
routes/

### use a separate router
> /service/user

> /service/user/admin

> /service/user?id=1001

### use a direct response
> /service/agent/all

### Start server

> npm start

By default, the http server binds to localhost or 0.0.0.0 at port 3000

After provide a valid certificate, https server can be used on port 3001

### Testing

> npm run lint

> npm run test

> npm run coverage

### Build (to-do)

/public/javascrips/ holds the build files

