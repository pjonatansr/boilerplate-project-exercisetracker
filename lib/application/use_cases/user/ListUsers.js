'use strict';

import { makeFindUsers } from '../../../domain/user/index.js';

const GetUsers = async (userRepository) => {
  const findUsers = makeFindUsers(userRepository);
  
  return findUsers()
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