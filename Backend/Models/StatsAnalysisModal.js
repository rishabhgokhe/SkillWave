import mongoose from 'mongoose';

const StatsSchema = new mongoose.Schema({
  users: {
    type: Number,
    required: true,
  },
  subscription: {
    type: Number,
    required: true,
  },
  views: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Statistics = mongoose.model('Statistics', StatsSchema);

export default Statistics;
