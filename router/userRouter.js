import express from "express";
import {
  addNewAdmin,
  login,
  patientRegister,
  getAllDoctors,
  getUserDetails,
  logoutAdmin,
  logoutPatient,
  logoutDoctor,
  addNewDoctor,
} from "../controller/userController.js";
import {
  isAdminAuthenticated,
  isPatientAuthenticated,
  isDoctorAuthenticated,
} from "../middlewares/auth.js";

const router = express.Router();
router.post("/patient/register", patientRegister);
router.post("/admin/register", addNewAdmin);
router.post("/doctor/register", addNewDoctor);
router.post("/login", login);

router.get("/doctors", getAllDoctors);

router.get("/admin/me", isAdminAuthenticated, getUserDetails);
router.get("/admin/logout", isAdminAuthenticated, logoutAdmin);

router.get("/patient/me", isPatientAuthenticated, getUserDetails);
router.get("/patient/logout", isPatientAuthenticated, logoutPatient);

router.get("/doctor/me", isDoctorAuthenticated, getUserDetails);
router.get("/doctor/logout", isDoctorAuthenticated, logoutDoctor);

router.get("/doctor/getall",  getAllDoctors);

export default router;
