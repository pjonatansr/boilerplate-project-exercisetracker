'use strict';

import { mongooseExercise as MongooseExercise } from '../orm/mongoose/schemas/Exercise.js';
import { LogRepository } from '../../domain/log/LogRepository.js';

class LogRepositoryMongo extends LogRepository {

  constructor() {
    super();
  }

  async find(username) {
    const mongooseExercises = await MongooseExercise.find({ username });

    return mongooseExercises.map((mongooseLog) => ({
      duration: mongooseLog.duration,
      description: mongooseLog.description,
      date: mongooseLog.date
    }));
  }
};

export { LogRepositoryMongo };