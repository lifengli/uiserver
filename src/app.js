import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import errorHandler from 'errorhandler';
import express from 'express';
import favicon from 'serve-favicon';
import logger from 'morgan';
import path from 'path';

import user from './router/user';
import {agent} from './data/agent';
import homepageConfigData from './data/homepage';
import navigationConfigData from './data/navigation';
import naturalConfigData from './data/natural';

export function appInit() {
  const app = express();

  app.use(errorHandler());

  app.set('views', path.join(__dirname, '..', 'views'));
  app.set('view engine', 'jade');

  app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: false}));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, '..', 'public'), {index: 'index.html'}));

  app.use(favicon(path.join(__dirname, '../public', 'favicon.ico')));

  // use a separate router
  app.use('/service/user', user);

  // direct response
  app.all('/service/agent/*', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(JSON.stringify(agent));
  });

  // render homepage content
  app.use('/api/homepage', homepageConfigData);

  // render page content
  app.use('/api/navigation', navigationConfigData);
  app.use('/api/natural', naturalConfigData);

  app.get(/^((?!\/agent\/|\/fonts\/|\/images\/|\/javascripts\/|\/stylesheets\/).)*$/g, (req, res) => {
    res.sendFile(`${path.join(__dirname, '..', 'public')}/index.html`);
  });

  return app;
}
