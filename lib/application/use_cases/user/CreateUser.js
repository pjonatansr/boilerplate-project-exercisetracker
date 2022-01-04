'use strict';

import { makeUser } from '../../../domain/user/index.js';

const CreateUser = async (
  username,
  { persist }
) => {
  const user = makeUser({ username });
  const userCreated = await persist(user);
  
  return {
    username: userCreated.getUsername(),
    _id: userCreated.getId()
  }
}

export {
  CreateUser
}