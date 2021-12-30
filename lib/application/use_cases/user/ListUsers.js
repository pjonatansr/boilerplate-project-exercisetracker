'use strict';

import { getUsers } from '../../../domain/user/index.js';

const GetUsers = async (userRepository) => {
  return getUsers(userRepository)
    .then(
      (data) => (
        data.map ((user) => ({ 
            ...user,
            username: user.username || ""
        }))
      )
    );
}

export {
  GetUsers
}