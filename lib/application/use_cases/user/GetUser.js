'use strict';

import { makeGetUser } from '../../../domain/user/index.js';

const GetUser = async (id, userRepository) => {
  const getUser = makeGetUser(userRepository);

  return getUser(id)
    .then(data => ({
      ...data,
      username: data.username || ""
    }));
}

export {
  GetUser
}