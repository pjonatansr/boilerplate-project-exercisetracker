'use strict';

import { makeUser } from '../../../domain/user/index.js';


const CreateUser = (username, { userRepository }) => {
  console.log(userRepository);
  const user = makeUser({username});
  return userRepository.persist(user);
}

export {
  CreateUser
}