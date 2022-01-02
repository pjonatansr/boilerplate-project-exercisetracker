'use strict';

import { makeFindLogs } from '../../../domain/log/index.js';

const GetLogs = async (user, logRepository) => {
  const findLogs = makeFindLogs(logRepository);

  return findLogs(user.username)
    .then((data) => ({
      ...user,
      log: data,
      count: data.length || 0
    }));
}

export {
  GetLogs
}