'use strict';

import express from 'express';
import cors from 'cors';
import bodyParser from "body-parser";
import * as constants from './constants.js';
import { router as userRouter } from '../../interfaces/routes/user.js';

const app = express();
('dotenv').config;

async function createServer() {
  app.use(bodyParser.urlencoded({ extended: false }));

  app.use(bodyParser.json());

  app.use(cors());

  app.use(express.static(constants.PUBLIC));

  app.get('/', (_, res) => {
    res.sendFile(
      '/index.html',
      { 'root': constants.VIEWS }
    );
  });

  app.use((req, _, next) => {
    console.log(`${req.method} - ${req.path}`);
    next()
  });

  app.use("/api/users", userRouter);

  const listener = app.listen(
    process.env.PORT || 3000,
    () => {
      console.log('Your app is listening on port ' + listener.address().port)
    }
  );
}



export { createServer }
