import mongoose from 'mongoose';

const { Schema } = mongoose;

const UserSchema = new Schema({
  identifier: { type: String, required: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  createdAt: Date,
  updatedAt: Date,
  deletedAt: Date
});

const User = mongoose.model('User', UserSchema);
export default User;