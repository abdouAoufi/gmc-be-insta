import mongoose from "mongoose";

const Schema = mongoose.Schema;
const model = mongoose.model;


const postSchema = new Schema({
 userName: {
  type: Schema.Types.String,
  required: true
 },
 caption: {
  type: Schema.Types.String,
  required: true
 },
 imgUrl: {
  type: Schema.Types.String,
  required: true
 },
 likes: {
  type: Schema.Types.Number,
  required: true,
 },
});


export default model("Post", postSchema);