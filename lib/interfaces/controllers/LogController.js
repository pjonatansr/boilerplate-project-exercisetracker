'use strict';

import { GetLogs } from '../../application/use_cases/log/ListLogs.js';
import { LogRepositoryMongo } from '../../infrastructure/repositories/LogRepositoryMongo.js';

const getLogs = async (user) => {
  const logRepository = new LogRepositoryMongo();
  const logs = await GetLogs(user, logRepository);
  return logs;
}

export {
  getLogs
}