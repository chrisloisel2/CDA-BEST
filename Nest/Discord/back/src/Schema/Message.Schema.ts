import mongoose from 'mongoose';

export const messageSchema = new mongoose.Schema({
  content: { type: String, required: true },
  sender: { type: String, required: true, ref: 'User' },
  channel: { type: String, required: true, ref: 'Channel' },
  timestamp: { type: Date, default: Date.now },
});
