const mongoose=require("mongoose")
const connectdb=async()=>{
    try { 
        await mongoose.connect(process.env.MONGO_URI);
       console.log("db successflly connected");   
    } catch (error) {
        console.log("error");
    }
}
module.exports=connectdb