'use strict';

import { makeExercise } from '../../../domain/exercise/index.js';

const CreateExercise = async (
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
  const exerciseCreated = await persist(exercise);

  return {
    description: exerciseCreated.getDescription(),
    duration: exerciseCreated.getDuration(),
    date: exerciseCreated.getDate().toDateString()
  }

}

export {
  CreateExercise
}