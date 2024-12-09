import mongoose from 'mongoose';

export enum UserRole {
  ADMIN = 'ADMIN',
  FARMER = 'FARMER',
  CUSTOMER = 'CUSTOMER'
}

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  emailVerified: Date,
  image: String,
  role: { 
    type: String, 
    enum: UserRole,
    default: UserRole.CUSTOMER 
  },
  accounts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Account'
  }],
  sessions: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Session'
  }]
}, {
  timestamps: true
});

export const User = mongoose.models.User || mongoose.model('User', userSchema);