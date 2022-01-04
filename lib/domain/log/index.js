'use strict';

const makeFindLogs = ({ find }) => {
  return async function findLogs(username, query) {
    return await find(username, query);
  }
}

export { makeFindLogs }
