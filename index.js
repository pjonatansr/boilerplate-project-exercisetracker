'use strict';

import * as server  from './lib/infrastructure/webserver/server.js';

// Start the server
const start = async () => {
  try {
    await server.createServer();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

start();