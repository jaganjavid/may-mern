import bcrypt from "bcrypt";

const users = [
    {
        name:"Admin user",
        email:"admin@gmail.com",
        password:bcrypt.hashSync("123456", 10),
        isAdmin:true
    },
    {
        name:"jagan",
        email:"jagan@gmail.com",
        password:bcrypt.hashSync("123456", 10),
        isAdmin:false
    },
    {
        name:"javid",
        email:"javid@gmail.com",
        password:bcrypt.hashSync("123456", 10),
        isAdmin:false
    }
]


export default users;