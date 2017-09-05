# uiserver
Provide static content and routing to dynamic content for front-end UI components

[![Dependency](https://img.shields.io/badge/dependencies-up%20to%20date-green.svg)](https://github.com/lifengli/uiserver)
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/lifengli/uiserver)
[![Maintenance](https://img.shields.io/badge/maintained-yes-orange.svg)](https://github.com/lifengli/uiserver)
[![Pull](https://img.shields.io/badge/pull%20request-welcome-ff69b4.svg)](https://github.com/lifengli/uiserver)

## serve static content via proxy
> public/fonts

> public/images

> public/javascripts

> public/stylesheets

## provides routing in two formats

### use router for dynamic content
> /service/user

> /service/user/admin

> /service/user?id=1001

### use direct response for static content
> /service/agent/all

### Start server

> npm start

By default, the http server binds to localhost or 0.0.0.0 at port 3000

After provideing a valid certificate, https server can be used on port 3001

### Testing

> npm run lint

> npm run test

> npm run coverage

### Build (from basicui)

/public/javascrips/ holds the built bundle file

