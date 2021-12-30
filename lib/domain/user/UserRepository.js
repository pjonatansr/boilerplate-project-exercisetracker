'use strict';

class UserRepository {

  persist(domainUser) {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
  }

  async get(userId) {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
  };
}

export { UserRepository }