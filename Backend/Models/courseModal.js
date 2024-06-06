import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please enter course title'],
    minLength: [4, 'Title must be atleast 4 characters'],
    maxLength: [80, 'Title cannot excced 80 characters'],
  },
  description: {
    type: String,
    required: [true, 'Please enter course description'],
    minLength: [50, 'Title must be atleast 50 characters'],
  },
  lectures: [
    {
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      video: {
        public_id: {
          type: String,
          required: true,
        },
        url: {
          type: String,
          required: true,
        },
      },
    },
  ],
  poster: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  views: {
    type: Number,
    default: 0,
  },
  numOfVideos: {
    type: Number,
    default: 0
  },
  category: {
    type: String,
    required: true
  },
  createdBy: {
    type: String,
    required: [true, 'Please enter course creater name']
  },
  createdAt: {
    type: Date,
    default: Date.now;
  }
});

const Course = mongoose.model('Course', courseSchema);

export default Course;
