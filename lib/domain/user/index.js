'use strict';

import { buildMakeUser } from './User.js';

const makeUser = buildMakeUser();

const makeFindUsers = ({ find }) => {
  return async function findUsers() {
    return await find();
  }
}

const makeGetUser = ({ get }) => {
  return async function getUser(id) {
    return get(id);
  }
}

export { makeUser, makeFindUsers, makeGetUser }
