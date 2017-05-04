# uiserver
Provide static content and routing to front-end UI components

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

### Running

> npm start

By default, the http server binds to localhost or 0.0.0.0 at port 3000

After provide a valid certificate, https server can be used on port 3001

### Testing

> npm run lint

> npm run test

### Build (to-do)

/public/javascrips/ holds the build files

