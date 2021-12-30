import { mongoose } from '../mongoose.js';

const userSchema = new mongoose.Schema({
  username: String
});

const mongooseUser = mongoose.model('User', userSchema);
export {
  mongooseUser
}