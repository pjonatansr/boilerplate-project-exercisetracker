'use strict';

import { makeFindLogs } from '../../../domain/log/index.js';
import { makeExercise } from '../../../domain/exercise/index.js';

const GetLogs = async (user, logRepository) => {
  const findLogs = makeFindLogs(logRepository);

  return findLogs(user.username)
    .then((data) => ({
      ...user,
      log: data.map(logItem => {
        const {
          getDuration,
          getDescription,
          getDate
        } = makeExercise(logItem);

        return {
          duration: getDuration(),
          description: getDescription(),
          date: getDate()
        };
      }),
      count: data.length || 0
    }));
}

export {
  GetLogs
}