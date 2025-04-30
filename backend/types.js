const zod = require('zod')

const signup = zod.object({
    userName:zod.string().min(1,"Username is required").email(),
    firstName: zod.string().min(1, "First name is required"),
    lastName: zod.string().min(1, "Last name is required"),
    gender: zod.enum(["male", "female", "other"]),
    password: zod.string().min(6, "Password must be at least 6 characters long"),
})

const signin = zod.object({
    userName: zod.string().min(1, "Username is required").email(),
    password: zod.string().min(6, "Password must be at least 6 characters long"),
})

const updateData = zod.object({
    firstName: zod.string().min(1, "First name is required"),
    lastName: zod.string().min(1, "Last name is required"),
    password: zod.string().min(6, "Password must be at least 6 characters long")
})


module.exports ={
    signup,
    signin,
    updateData
}