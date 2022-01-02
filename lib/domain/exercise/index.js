'use strict';

import { buildMakeExercise } from './Exercise.js';

const makeExercise = buildMakeExercise();

const makeFindExercises = ({ find }) => {
  return async function findExercises() {
    return await find();
  }
}

export { makeExercise, makeFindExercises }
