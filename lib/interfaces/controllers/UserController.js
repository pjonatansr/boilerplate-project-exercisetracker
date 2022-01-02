'use strict';

import { CreateUser } from '../../application/use_cases/user/CreateUser.js';
import { ListUsers } from '../../application/use_cases/user/ListUsers.js';
import { GetUser } from '../../application/use_cases/user/GetUser.js';
import { UserRepositoryMongo } from '../../infrastructure/repositories/UserRepositoryMongo.js';

const createUser = async (request) => {
  // Input
  const username = request.body.username;

  // Treatment
  const userRepository = new UserRepositoryMongo();
  const userCreated = await CreateUser(username, userRepository);

  const user = {
    username: userCreated.getUsername(),
    _id: userCreated.getId()
  }

  // Output
  return user
}

const getUser = async (id) => {
  const userRepository = new UserRepositoryMongo();
  const user = await GetUser(id, userRepository);
  return user;
}

const listUsers = async () => {
  const userRepository = new UserRepositoryMongo();
  const users = await ListUsers(userRepository);
  return users;
}

export {
  createUser, listUsers, getUser
}