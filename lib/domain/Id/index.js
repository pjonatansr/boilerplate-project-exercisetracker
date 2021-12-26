'use strict';

import { v4 as uuidv4, validate as uuidValidate } from 'uuid';

const Id = Object.freeze({
  makeId: uuidv4,
  isValidId: uuidValidate
});

export { Id };

