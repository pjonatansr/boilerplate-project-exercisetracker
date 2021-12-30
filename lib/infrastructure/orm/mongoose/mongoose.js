'use strict';

import mongoose from 'mongoose';
import { environment } from '../../config/environment.js';

mongoose.connect(environment.database.url, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('connected to MongoDB database!')
});

export { mongoose }