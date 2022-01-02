'use strict';

import { mongooseUser as MongooseUser } from '../orm/mongoose/schemas/User.js';
import { UserRepository } from '../../domain/user/UserRepository.js';
import { buildMakeUser } from '../../domain/user/User.js';

const makeUser = buildMakeUser();
class UserRepositoryMongo extends UserRepository {

  constructor() {
    super();
  }

  async persist(userEntity) {
    const { getUsername } = userEntity;

    const mongooseUser = new MongooseUser({ username: getUsername() });

    await mongooseUser.save();

    return makeUser(
      { id: mongooseUser._id, username: mongooseUser.username }
    );
  }

  async get(userId) {
    const mongooseUser = await MongooseUser.findById(userId);

    return mongooseUser &&
      { _id: mongooseUser._id, username: mongooseUser.username };
  }

  async find() {
    const mongooseUsers = await MongooseUser.find();
      
    return mongooseUsers.map((mongooseUser) => (
      {
        _id: mongooseUser._id,
        username: mongooseUser.username
      }
    ));
  }
};

export { UserRepositoryMongo };