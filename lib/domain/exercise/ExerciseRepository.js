'use strict';

class ExerciseRepository {

  persist(domainExercise) {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
  }

  async get(exerciseId) {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
  };

  async find() {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
  }
}

export { ExerciseRepository }