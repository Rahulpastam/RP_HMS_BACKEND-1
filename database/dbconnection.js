import mongoose from "mongoose";

export const dbconnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "RP_HSM-1",
    })
    .then(() => console.log("DB Connected succesfully"))
    .catch((e) => console.log("ERROR: " + e));
};
