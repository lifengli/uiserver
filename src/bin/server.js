#!/usr/bin/env node

// import fs from 'fs';
import http from 'http';
import https from 'https';
import cluster from 'cluster';

import {appInit} from '../app';

const httpPort = normalizePort(process.env.MY_SERVER_PORT || '3000');
const httpsPort = normalizePort(process.env.MY_SERVER_SSL_PORT || '3001');
const host = process.env.MY_SERVER_HOST || '0.0.0.0';
const clusterSize = parseInt((process.env.MY_SERVER_CLUSTER_SIZE || '10'), 10);

const sslOptions = {
  // replace with real certificate later
  // key: fs.readFileSync('ssl/security.key'),
  // cert: fs.readFileSync('ssl/security.crt')
};

if (cluster.isMaster) {
  for (let i = 0; i < clusterSize; i += 1) {
    cluster.fork();
  }

  cluster.on('disconnect', () => {
    cluster.fork();
  });
}
else {
  const app = appInit();
  app.set('port', httpPort);

  const httpServer = http.createServer(app);
  httpServer.listen(httpPort, host);

  const httpsServer = https.createServer(sslOptions, app);
  httpsServer.listen(httpsPort);
}

function normalizePort(val) {
  const nport = parseInt(val, 10);

  if (isNaN(nport)) {
    // named pipe
    return val;
  }

  if (nport >= 0) {
    // port number
    return nport;
  }

  return false;
}
