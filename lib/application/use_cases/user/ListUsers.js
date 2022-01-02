'use strict';

import { makeFindUsers } from '../../../domain/user/index.js';

const ListUsers = async (userRepository) => {
  const findUsers = makeFindUsers(userRepository);
  
  const treatUsers = (data) => (
      data.map ((user) => ({ 
        ...user,
        username: user.username || ""
      }))
    )

  return findUsers()
    .then(treatUsers);
}

export {
  ListUsers
}