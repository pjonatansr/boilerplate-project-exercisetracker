'use strict';

const buildMakeUser = ({ Id }) => {
  return function makeUser({
    username,
    id = Id.makeId()
  } = {}) {
    if (!Id.isValidId(id)) {
      throw new Error('User must have a valid id.');
    }
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

export default buildMakeUser