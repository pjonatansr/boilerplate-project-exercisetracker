'use strict';

import { makeFindExercises } from '../../../domain/exercise/index.js';

const GetExercises = async (exerciseRepository) => {
  const findExercises = makeFindExercises(exerciseRepository);
  const exercises = await findExercises();

  return { 
    ...exercises,
    date: exercises.date.toDateString()
  };
}

export {
  GetExercises
}