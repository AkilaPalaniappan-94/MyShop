import bcrypt from 'bcryptjs'


 const users=[
{name:"Ak",
email:"ak@gmail.com",
password:bcrypt.hashSync('123456'),
isAdmin:true
},
{name:"Ak1",
    email:"ak@gmail.com",
    password:bcrypt.hashSync('123456'),
    },
    {name:"Ak2",
        email:"ak@gmail.com",
        password:bcrypt.hashSync('123456'),
        }
]

export default users