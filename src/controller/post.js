import Post from "../model/post.js"

export const createPost = (req, res, next) => {
 const post = new Post(req.body);
 post.save().then(() => res.json({
  message: "Post created"
 })).catch(() => res.json({
  message: "error creating post"
 }))

}



export const getPosts = (req, res, next) => {
 Post.find().limit(10).exec().then(result => res.json({
  posts: result
 }))
}