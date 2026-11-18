import mongoose from "mongoose";

const connectDB = async ()=>{
  await  mongoose.connect("mongodb+srv://dattapadre357_db_user:noteapp@clusternoteapp.lxfytzr.mongodb.net/")

  console.log("MongoDB DataBase Connection Successfully...")
}

export default connectDB;