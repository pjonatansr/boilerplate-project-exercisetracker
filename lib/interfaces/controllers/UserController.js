'use strict';

import { CreateUser } from '../../application/use_cases/user/CreateUser.js';
import { GetUsers } from '../../application/use_cases/user/ListUsers.js';
import { UserRepositoryMongo } from '../../infrastructure/repositories/UserRepositoryMongo.js';

const createUser = async (request) => {
  // Input
  const username = request.body.username;

  // Treatment
  const userRepository = new UserRepositoryMongo();
  const userCreated = await CreateUser(username, { userRepository });

  console.log(userCreated);

  const user = {
    username: userCreated.getUsername(),
    _id: userCreated.getId()
  }

  // Output
  return user
}


const getUsers = async () => {
  const userRepository = new UserRepositoryMongo();
  console.log(userRepository);
  const users = await GetUsers(userRepository);
  console.log("?", users);
  return users;
}

export {
  createUser, getUsers
}