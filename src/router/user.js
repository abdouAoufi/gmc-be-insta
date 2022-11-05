import {
 Router
} from "express"
import {
 loginController,
 signupController
} from "../controller/user.js";


const userRouter = Router();


userRouter.post("/signup", signupController);

userRouter.post("/login", loginController);


export default userRouter;