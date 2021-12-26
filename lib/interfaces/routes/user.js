'use strict';

import express from 'express';
import * as UserController from "../controllers/UserController.js";

var router = express.Router();

const createUser = UserController.createUser
router.post("", async (req, res) => {
  const user = await createUser(req);
  console.log(user);
  res.json(user);
});

// define the home page route
router.get('/', function(req, res) {
  console.log("!!!");
});

export { router };