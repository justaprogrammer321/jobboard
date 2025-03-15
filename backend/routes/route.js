const express = require("express");
const jobDataController=require('../controllers/jobDataController')
const router = express.Router();

router.get("/jobs",jobDataController.getjobData)

module.exports=router