'use strict';

import { Id } from '../Id/index.js';
import buildMakeUser from './User.js';

const makeUser = buildMakeUser({ Id });

export { makeUser }
