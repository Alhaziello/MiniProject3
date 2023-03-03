import mongoose from "mongoose";

let User;

try {
  User = mongoose.model("User");
} catch {
  const UserSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, unique: true },
    rememberMe: { type: Boolean, required: false },
  });

  User = mongoose.model("User", UserSchema);
}

export default User;
