'use strict';

import express from 'express';
import * as UserController from "../controllers/UserController.js";
import * as ExerciseController from "../controllers/ExerciseController.js";
import * as LogController from "../controllers/LogController.js";

var router = express.Router();

router.post("", async (req, res) => {
  const createUser = UserController.createUser;
  const user = await createUser(req);
  res.json(user);
});

router.get("", async (_, res) => {
  const listUsers = UserController.listUsers;
  const users = await listUsers();
  res.json(users)
});

router.use(["/:_id/exercises", "/:_id/logs"], async (req, _, next) => {
  const getUser = UserController.getUser;
  req.user = getUser(req.params._id);

  next();
});

router.post("/:_id/exercises", async (req, res) => {
  const createExercise = ExerciseController.createExercise;
  const exercise = await createExercise(req);

  res.json(exercise);
});

router.get("/:_id/logs", async (req, res) => {
  const getLogs = LogController.getLogs;
  const logs = await getLogs(req.user, req.query);
  
  res.json(logs);
});

// define the home page route
router.get('/', function() {
  console.log("!!!");
});

export { router };