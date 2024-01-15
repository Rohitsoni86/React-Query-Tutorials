const express = require("express");

const indexRoute = express.Router();
const {getStudentDetails, getStudentAddress, updateStudentData} = require("../controllers/dataFetchController")

indexRoute.get("/api/usersdata", getStudentDetails);
indexRoute.get("/api/usersdata/address/:id", getStudentAddress);
indexRoute.post("/api/updateusersdata", updateStudentData);

module.exports = indexRoute;
