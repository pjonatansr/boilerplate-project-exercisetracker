'use strict';

import { buildMakeUser } from './User.js';

const makeUser = buildMakeUser();

const makeFindUsers = ({ find }) => {
  return async function findUsers() {
    return await find();
  }
}

export { makeUser, makeFindUsers }
