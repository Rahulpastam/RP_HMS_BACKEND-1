import mongoose from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "Enter a valid email"],
  },
  phone: {
    type: String,
    required: true,
    minlength: [10, "enter a valid mobile number"],
    maxlength: [10, "enter a valid mobile number"],
  },
  message: {
    type: String,
    required: true,
    minlength: [10, "message must be atleast 10 characters"],
  },
});

export const Message = mongoose.model("Message", messageSchema);
