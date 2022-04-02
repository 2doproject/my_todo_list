import mongoose from 'mongoose';

const { Schema } = mongoose;

const RoutineSchema = new Schema({
  id: { type: Number, unique: true },
  isDone: Boolean,
  userId: { type: Schema.Types.Number, ref: 'User' },
  todo: String,
  type: String,
  createdAt: Date,
  updatedAt: Date
});

const Routine = mongoose.model('Routine', RoutineSchema);
export default Routine;