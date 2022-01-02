'use strict';

import { makeExercise } from '../../../domain/exercise/index.js';

const CreateExercise = (
  username,
  description,
  duration,
  date,
  { persist }
) => {
  const exercise = makeExercise({
    username,
    description,
    duration,
    date
  });

  return persist(exercise);
}

export {
  CreateExercise
}