import * as mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';

const environment = process.env.NODE_ENV;
const stage = require('../config')[environment];

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: 'String',
    required: true,
    trim: true,
    unique: true
  },
  password: {
    type: 'String',
    required: true,
    trim: true
  },
  email: {
    type: 'String',
    required: true,
    trim: true,
    unique: true
  }
});

userSchema.pre('save', function(next) {
  const user = this as any;
  if (!user.isModified || !user.isNew) {
    next();
  } else {
    bcrypt.hash(user.password, stage.saltingRounds, (err, hash) => {
      if (err) {
        console.log('Error hashing password for user', user.name);
        next(err);
      } else {
        user.password = hash;
        next();
      }
    });
  }
});


export default mongoose.model('User', userSchema);
