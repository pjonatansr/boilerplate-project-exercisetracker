'use strict';

import { mongooseExercise as MongooseExercise } from '../orm/mongoose/schemas/Exercise.js';
import { LogRepository } from '../../domain/log/LogRepository.js';
import { buildMakeExercise } from '../../domain/exercise/Exercise.js';

const makeExercise = buildMakeExercise();

class LogRepositoryMongo extends LogRepository {

  constructor() {
    super();
  }

  async find(username, query) {
    const findObj = { username };
    const { limit, date } = query;

    Object.keys(date).length !== 0 && (findObj.date = date);

    const mongooseExercises = await MongooseExercise
      .find(findObj)
      .limit(limit)

    return mongooseExercises.map((mongooseExercise) => {
      return makeExercise(
        {
          id: mongooseExercise._id,
          username: mongooseExercise.username,
          duration: mongooseExercise.duration,
          description: mongooseExercise.description,
          date: mongooseExercise.date
        }
      );
    });

        
  }
};

export { LogRepositoryMongo };