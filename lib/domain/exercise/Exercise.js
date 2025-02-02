'use strict';

const buildMakeExercise = () => {
  return function makeExercise({
    username,
    description,
    duration,
    date,
    id
  } = {}) {
    
    const dateObj = !date ? new Date() : new Date(date);
    
    if (!description) {
      throw new Error('Path `description` is required.');
    }

    if (!duration) {
      throw new Error('Path `description` is required.');
    }

    if (!username) {
      throw new Error('Path `username` is required.');
    }

    if (username.length < 2) {
      throw new Error("Username must be longer than 2 characters.");
    }

    return Object.freeze({
      getUsername: () => username,
      getDuration: () => duration,
      getDescription: () => description,
      getDate: () => dateObj,
      getId: () => id
    });
  }
}

const makeGetExercise = ({ find }) => {
  return async function getExercise() {
    return await find();
  }
}

export { buildMakeExercise, makeGetExercise }