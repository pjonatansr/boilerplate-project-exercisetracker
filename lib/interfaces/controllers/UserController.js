'use strict';

import { CreateUser } from '../../application/use_cases/user/CreateUser.js';
import { UserRepositoryInMemory } from '../../infrastructure/repositories/UserRepositoryInMemory.js';

const createUser = async (request) => {
  // Input
  const username = request.body.username;

  // Treatment
  const userRepository = new UserRepositoryInMemory();
  const userCreated = await CreateUser(username, { userRepository });

  const user = {
    username: userCreated.getUsername(),
    _id: userCreated.getId()
  }

  // Output
  return user
}

export {
  createUser
}