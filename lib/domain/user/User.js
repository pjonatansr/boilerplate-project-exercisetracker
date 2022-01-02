'use strict';

const buildMakeUser = () => {
  return function makeUser({
    username,
    id
  } = {}) {
    if (!username) {
      throw new Error('Path `username` is required.');
    }
    if (username.length < 2) {
      throw new Error("Username must be longer than 2 characters.");
    }

    return Object.freeze({
      getUsername: () => username,
      getId: () => id
    });
  }
}

const makeGetUsers = ({ find }) => {
  return async function getUsers() {
    return await find();
  }
}

export { buildMakeUser, makeGetUsers }