'use strict';

import { makeFindLogs } from '../../../domain/log/index.js';
import { makeExercise } from '../../../domain/exercise/index.js';

const GetLogs = async (_user, logRepository) => {
  const findLogs = makeFindLogs(logRepository);
  const user = await _user;

  return findLogs(user.username)
    .then((data) => ({
      ...user,
      log: data.map(logItem => {
        const {
          getDuration,
          getDescription,
          getDate
        } = makeExercise({
          ...logItem,
          username: user.username
        });

        return {
          duration: getDuration(),
          description: getDescription(),
          date: getDate()
        }
      }),
      count: data.length || 0
    }));
}

export {
  GetLogs
}