import { mongoose } from '../mongoose.js';

const exerciseSchema = new mongoose.Schema({
  username: String,
  description: String,
  duration: Number,
  date: Date
});

const mongooseExercise = mongoose.model('Exercise', exerciseSchema);
export {
  mongooseExercise
}