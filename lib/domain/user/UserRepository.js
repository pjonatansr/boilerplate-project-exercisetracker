'use strict';

class UserRepository {

  persist(domainUser) {
    console.log("Trying to persist user...", domainUser);
    //throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
  }

};

export { UserRepository }