import mongoose from "mongoose";

export const dbconnection = () => {
  mongoose.connect(process.env.MONGO_URI, {
    dbName: "HOSPITAL_MANAGEMENT_SYSTEM"
  }).then(()=>console.log("DB Connected succesfully"))
    .catch((e)=> console.log("ERROR: "+e))
}



