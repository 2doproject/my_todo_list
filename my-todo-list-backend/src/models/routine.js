import mongoose from 'mongoose';

const { Schema } = mongoose;

const RoutineSchema = new Schema({
  isDone: Boolean,
  todo: { type: String, required: true },
  type: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  targetDate: [
    {
      start: Date,
      end: Date,
    },
  ],
});

const Routine = mongoose.model('Routine', RoutineSchema);
export default Routine;
