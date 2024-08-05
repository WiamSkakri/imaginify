import { Document, Schema, model, models } from "mongoose";

interface IUser extends Document {
    clerkID: string;
    email: string;
    username: string;
    photo: string;
    firstName?: string;
    lastName?: string;
    planId?: number;
    creditBalance?: number;
}

const UserSchema = new Schema({
    clerkID: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    photo: { type: String, required: true },
    firstName: { type: String },
    lastName: { type: String },
    planId: { type: Number, default: 1 },
    creditBalance: { type: Number, default: 10 },
  });
  
  const User = models?.Image || model('User', UserSchema);
  
  export default User;