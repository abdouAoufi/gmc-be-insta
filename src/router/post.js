import {
 Router
} from "express";
import {
 createPost,
 getPosts
} from "../controller/post.js";



const postRouter = Router();


postRouter.post("/create-post", createPost);

postRouter.get("/get-posts", getPosts);


export default postRouter;