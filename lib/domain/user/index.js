'use strict';

import { buildMakeUser, makeGetUsers } from './User.js';

const makeUser = buildMakeUser();
const getUsers = (UserRepository) => {
  const getUsers = makeGetUsers(UserRepository)
  return getUsers();
};

export { makeUser, getUsers }
