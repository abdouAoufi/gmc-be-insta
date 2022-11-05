import {
 connect
} from "mongoose";
import {
 DB_URL
} from "../utils/utils.js";


export const connectToDb = () => connect(DB_URL);