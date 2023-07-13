import { Schema } from "mongoose";

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, "Email already exits!"],
    required: [true, "Email is required!"],
  },

  username: {
    type: String,
    required: [true, "Username is required!"],
    match: [
      /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9]+(?<![_.])$/,
      "Username invalid, it should contain 8-20 alphanumeric letters and be unique!",
    ],
  },
  password: {
    type: String,
    required: true,
  },
  allProperties: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Property",
    },
  ],

  image: {
    type: String,
  },
});
// const UserSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
//   allProperties: [
//     {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "Property",
//     },
//   ],
// });

const userModel = mongoose.model("User", UserSchema);

export default userModel;
