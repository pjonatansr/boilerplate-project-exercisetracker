'use strict';

const makeFindLogs = ({ find }) => {
  return async function findLogs(username) {
    return await find(username);
  }
}

export { makeFindLogs }
