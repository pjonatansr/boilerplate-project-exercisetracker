'use strict';

import { makeUser } from '../../../domain/user/index.js';

const CreateUser = (
  username,
  { persist }
) => {
  const user = makeUser({ username });

  return persist(user);
}

export {
  CreateUser
}