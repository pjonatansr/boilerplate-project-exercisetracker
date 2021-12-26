'use strict';

import { UserRepository } from '../../domain/user/UserRepository.js';

class UserRepositoryInMemory extends UserRepository {

  constructor() {
    super();
    this.index = 1;
    this.data = {};
  }

  persist = (userEntity) => {
    const row = Object.assign({}, userEntity);
    const rowId = this.index++;
    row.id = rowId;
    this.data[rowId] = row;

    return Promise.resolve(row);
  }
};

export { UserRepositoryInMemory }