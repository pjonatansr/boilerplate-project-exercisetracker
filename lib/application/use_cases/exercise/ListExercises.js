'use strict';

import { makeFindExercises } from '../../../domain/exercise/index.js';

const GetExercises = async (exerciseRepository) => {
  const findExercises = makeFindExercises(exerciseRepository);
  
  return await findExercises();
}

export {
  GetExercises
}