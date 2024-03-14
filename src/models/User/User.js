import { Schema, model } from 'mongoose';

const userSchema = new Schema({
   name: {
      type: String,
      required: true,
   },
   email: {
      type: String,
      required: true,
   },
   password: {
      type: String,
      required: true,
   },
   imageSource: {
      type: String,
   },
   role: {
      type: String,
      required: true,
   },
   loggedIn: {
      type: Boolean,
      required: true,
   },
});

const UserModel = model('User', userSchema);
export default UserModel;
