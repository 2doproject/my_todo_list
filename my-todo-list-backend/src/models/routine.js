import mongoose from 'mongoose';

const { Schema } = mongoose;

const RoutineSchema = new Schema({
  isDone: Boolean,
  userId: { type: Schema.Types.Number, ref: 'User' },
  todo: String,
  type: String,
  createdAt: Date,
  updatedAt: Date,
  targetDate: {
    $gte: Date,
    $lte: Date
  }
});

const Routine = mongoose.model('Routine', RoutineSchema);
export default Routine;