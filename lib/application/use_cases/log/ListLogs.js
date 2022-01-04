'use strict';

import { makeFindLogs } from '../../../domain/log/index.js';
import { makeExercise } from '../../../domain/exercise/index.js';


const parseQuery = query => {
  const patternDate = /^\d{4}(-\d{2}){2}$/;
  const patternNumber = /\d+/;

  const hasFrom = patternDate.test(query.from);
  const hasTo = patternDate.test(query.to);
  const hasLimit = patternNumber.test(query.limit);

  const params = { date: {} };

  hasFrom && (params.date.$gte = new Date(query.from));
  hasTo && (params.date.$lt = new Date(query.to));
  hasLimit && (params.limit = parseInt(query.limit));

  return params;
}

const treatResults = (user, data) => ({
  ...user,
  count: data.length || 0,
  log: data.map(logItem => {
    const {
      getDuration,
      getDescription,
      getDate
    } = logItem;

    return {
      description: getDescription(),
      duration: getDuration(),
      date: getDate().toDateString()
    }

  })
});

const GetLogs = async (pUser, pQuery, logRepository) => {
  const findLogs = makeFindLogs(logRepository);
  const query = parseQuery(pQuery);

  const user = await pUser;
  const logs = await findLogs(user.username, query);

  return treatResults(user, logs);

}

export {
  GetLogs
}