'use strict';

import * as constants from './constants.js';

/**
 * This module centralize all the environment variables of the application. Thanks to this module, there MUST NOT be any
 * `process.env` instruction in any other file or module.
 */
const getEnvironment = (() => {
  const environment = {
    database: {
      dialect: process.env.DATABASE_DIALECT || constants.SUPPORTED_DATABASE.MONGO,
      url: process.env.DATABASE_URI || '',
    }
  };

  if (process.env.NODE_ENV === 'test') {
    environment.database = {
      driver: constants.SUPPORTED_DATABASE.IN_MEMORY
    }
  }

  return environment;
})();

export { getEnvironment as environment };