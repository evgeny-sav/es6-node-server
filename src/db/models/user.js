import mongoose from 'mongoose';
import { hash } from 'bcryptjs';

const UserSchema = new mongoose.Schema(
  {
    name: String,
    username: String,
    email: String,
    phone: String,
    website: String,
    password: String,
  },
  {
    timestamps: true,
  }
);

UserSchema.pre('save', async function(next) {
  if (this.isModified('password')) {
    try {
      this.password = await hash(this.password, 10);
    } catch (e) {
      next(e);
    }
  }
  next();
});

const UserModel = mongoose.model('User', UserSchema);

export default UserModel;
