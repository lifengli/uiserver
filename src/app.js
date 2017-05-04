import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import errorHandler from 'errorhandler';
import express from 'express';
import favicon from 'serve-favicon';
import logger from 'morgan';
import path from 'path';

import user from './router/user';
import {agent} from './data/agent';

export function appInit() {
  const app = express();

  app.use(errorHandler());

  app.set('views', path.join(__dirname, '..', 'views'));
  app.set('view engine', 'jade');

  // use a separate router
  app.use('/service/user', user);

  // direct response
  app.all('/service/agent/*', (req, res) => {
    res.send(JSON.stringify(agent));
  });

  app.use(favicon(path.join(__dirname, '../public', 'favicon.ico')));

  app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: false}));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, '..', 'public'), {index: 'index.html'}));

  app.get(/^((?!\/agent\/|\/fonts\/|\/images\/|\/javascripts\/|\/stylesheets\/).)*$/g, (req, res) => {
    res.sendFile(`${path.join(__dirname, '..', 'public')}/index.html`);
  });

  return app;
}
