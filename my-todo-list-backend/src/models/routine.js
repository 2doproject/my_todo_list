import mongoose from 'mongoose';

const { Schema } = mongoose;

const RoutineSchema = new Schema({
  isDone: Boolean,
  todo: { type: String, required: true },
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