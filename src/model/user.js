import mongoose from "mongoose";

const Schema = mongoose.Schema;
const model = mongoose.model;


const userSchema = new Schema({
 userName: {
  type: Schema.Types.String,
  required: true
 },
 email: {
  type: Schema.Types.String,
  required: true
 },
 password: {
  type: Schema.Types.String,
  required: true
 },
 fullName: {
  type: Schema.Types.String,
  required: true
 },
});


export default model("User", userSchema);