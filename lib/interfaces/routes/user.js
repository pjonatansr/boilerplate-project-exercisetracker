'use strict';

import express from 'express';
import * as UserController from "../controllers/UserController.js";

var router = express.Router();

router.post("", async (req, res) => {
  const createUser = UserController.createUser;
  const user = await createUser(req);
  res.json(user);
});

router.get("", async (_, res) => {
  const getUsers = UserController.getUsers;
  const users = await getUsers();
  res.json(users)
});


// define the home page route
router.get('/', function(req, res) {
  console.log("!!!");
});

export { router };