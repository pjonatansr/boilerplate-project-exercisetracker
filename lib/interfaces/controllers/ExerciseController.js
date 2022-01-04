'use strict';

import { CreateExercise } from '../../application/use_cases/exercise/CreateExercise.js';
import { GetExercises } from '../../application/use_cases/exercise/ListExercises.js';
import { ExerciseRepositoryMongo } from '../../infrastructure/repositories/ExerciseRepositoryMongo.js';

const createExercise = async (request) => {

  // Input
  const {
    description,
    duration,
    date
  } = request.body;

  const user = await request.user;

  // Treatment
  const exerciseRepository = new ExerciseRepositoryMongo();
  const exerciseCreated = await CreateExercise(
    user.username,
    description,
    duration,
    date,
    exerciseRepository
  );

  // Output
  return {
    ...user,
    ...exerciseCreated
  };
}

const getExercises = async () => {
  const exerciseRepository = new ExerciseRepositoryMongo();
  const exercises = await GetExercises(exerciseRepository);
  return exercises;
}

export {
  createExercise, getExercises
}