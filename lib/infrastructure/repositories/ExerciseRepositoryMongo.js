'use strict';

import { mongooseExercise as MongooseExercise } from '../orm/mongoose/schemas/Exercise.js';
import { ExerciseRepository } from '../../domain/exercise/ExerciseRepository.js';
import { buildMakeExercise } from '../../domain/exercise/Exercise.js';

const makeExercise = buildMakeExercise();
class ExerciseRepositoryMongo extends ExerciseRepository {

  constructor() {
    super();
  }

  async persist(exerciseEntity) {
    const {
      getUsername,
      getDuration,
      getDescription,
      getDate
    } = exerciseEntity;

    const mongooseExercise = new MongooseExercise({
      username: getUsername(),
      duration: getDuration(),
      description: getDescription(),
      date: getDate()
    });

    await mongooseExercise.save();

    return makeExercise(
      {
        id: mongooseExercise._id,
        username: mongooseExercise.username,
        duration: mongooseExercise.duration,
        description: mongooseExercise.description,
        date: mongooseExercise.date
      }
    );
  }

  async get(exerciseId) {
    const mongooseExercise = await MongooseExercise.findById(exerciseId);

    return mongooseExercise &&
      {
        _id: mongooseExercise._id,
        username: mongooseExercise.username,
        duration: mongooseExercise.duration,
        description: mongooseExercise.description,
        date: mongooseExercise.date
      };
  }

  async find() {
    const mongooseExercises = await MongooseExercise.find();

    return mongooseExercises.map((mongooseExercise) => (
      {
        _id: mongooseExercise._id,
        username: mongooseExercise.username,
        duration: mongooseExercise.duration,
        description: mongooseExercise.description,
        date: mongooseExercise.date
      }
    ));
  }
};

export { ExerciseRepositoryMongo };