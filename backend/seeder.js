import dotenv from 'dotenv'
import Product from './models/productModel.js'
import connectDB from './config/db.js'
import  User from './models/userModel.js'
import products from './data/products.js'
import users from './data/users.js'

dotenv.config()
connectDB()

const importData=async()=>{
try{
await Product.deleteMany()
await User.deleteMany()

 const createdUsers = await User.insertMany(users)
const adminUser= createdUsers[0]._id

 const sampleProduct=products.map(product =>{
            return {...product,user : adminUser}
        })

        await Product.insertMany(sampleProduct)

        console.log('Data Imported')
        process.exit(1)

}
catch(error){
    console.error(`error occurred: ${error.message}`)
    process.exit(1)
}
}


const destroyData=async()=>{
    try{
        await Product.deleteMany()
        await User.deleteMany()
        console.log("Data Deleted")
        process.exit(1)
        
    }
    catch(error){
        console.error(`error occurred: ${error.message}`)
    process.exit(1)
    }
}

if(process.argv[2]==='-d'){
    destroyData()
}
importData()
