import User from "../model/user.js"

export const signupController = (req, res, next) => {

 const user = new User(req.body);

 user.save().then(() => res.json({
  message: "Your account created"
 })).catch(() => res.json({
  message: "Error when creating account"
 }))
}
export const loginController = (req, res, next) => {
 User.findOne({
  email: req.body.email
 }).exec().then(result => {
  if (!result) {
   return res.json({
    message: "this email does not exist"
   })
  }
  if (result.password === req.body.password) {
   return res.json({
    message: "welcome"
   })
  }
  res.json({
   message: "Your password is wrong"
  })
 })
}