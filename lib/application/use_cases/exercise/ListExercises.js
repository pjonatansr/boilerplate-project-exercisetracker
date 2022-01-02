'use strict';

import { makeFindExercises } from '../../../domain/exercise/index.js';

const GetExercises = async (exerciseRepository) => {
  const findExercises = makeFindExercises(exerciseRepository);
  
  return findExercises()
    .then(
      (data) => (
        data.map ((exercise) => ({ 
            ...exercise,
            exercisename: exercise.exercisename || ""
        }))
      )
    );
}

export {
  GetExercises
}