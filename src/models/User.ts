import mongoose, { Document, Model, Schema } from 'mongoose';

interface IUser extends Document {
    email: string;
    password: string;
    role: "admin" | "patient" | "doctor"
}

const UserSchema = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, required: true, enum: ["admin", "patient", "doctor"] }
})

const User = mongoose.models.User || mongoose.model<IUser>('User', UserSchema);

export default User;