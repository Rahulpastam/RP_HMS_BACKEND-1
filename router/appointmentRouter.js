import express from "express";
import {
  deleteAppointment,
  getAllAppointments,
  bookAppointment,
  updateAppointmentStatus,
  updateAppointmentDetails,
} from "../controller/appointmentController.js";
import {
  isAdminAuthenticated,
  isPatientAuthenticated,
} from "../middlewares/auth.js";

const router = express.Router();

router.post("/book", isPatientAuthenticated, bookAppointment);
router.get("/getallAppointments", getAllAppointments);
router.put("/updateStatus/:id", isAdminAuthenticated, updateAppointmentStatus);
router.put(
  "/updateDetails/:id",
  isPatientAuthenticated,
  updateAppointmentDetails
);
router.delete("/delete/:id", isAdminAuthenticated, deleteAppointment);

export default router;
