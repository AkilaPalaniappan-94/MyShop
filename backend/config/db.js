import mongoose, { connect } from 'mongoose'


const connectDB =async () => {
    try{
 const conn= await mongoose.connect(process.env.MONGO_URI)
    console.log(`Connection Successfull: ${conn.connection.host}`)
    }
    catch(error){
        console.log(`error occoured: ${error.message}`)
        process.exit(1)
    }
}

export default connectDB