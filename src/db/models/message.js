import mongoose from 'mongoose';

const MessageSchema = new mongoose.Schema(
  {
    userId: String,
    body: String,
  },
  {
    timestamps: true,
  }
);

const MessageModel = mongoose.model('Message', MessageSchema);

export default MessageModel;
