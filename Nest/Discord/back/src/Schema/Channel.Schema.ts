import mongoose from 'mongoose';

export const channelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  messages: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Message' }],
});

