import mongoose from "mongoose";

export const dbconnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "RP_HospitalManagementSystem",
    })
    .then(() => console.log("DB Connected succesfully"))
    .catch((e) => console.log("ERROR: " + e));
};
