const express = require("express");
const router = express.Router();
const Orders = require("../db/model/users");

//view BookingData
router.get("/BookingData/:phone", async (req, resp) => {
  try {
    let phone_number = req.params.phone;
    const orders = await Orders.find({ phoneNo: phone_number });
    resp.status(200).send(orders);

    //console.log(orders);
    // localStorage.setItem("phone",JSON.stringify())
  } catch (error) {
    console.warn(error);
    resp.status(500).send({
      success: false,
      error: "Internal Server Error",
      message: "Error in fetching booking data ",
    });
  }
});

router.post("/BookingData", async (req, resp) => {
  const currentDate = new Date();
  req.body.date = currentDate;
  const user = await Orders.create({
    name: req.body.name,
    address: req.body.address,
    phoneNo: req.body.phoneNo,
    ambulanceType: req.body.ambulanceType,
    currentDate: req.body.currentDate,
  });
  console.log(req.body)
  const result = await user.save();
  resp.send(result);
});

//for admin only
router.get("/BookingData", async (req, res) => {
  try {
    const result = await Orders.find();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: "Error retrieving booking data" });
  }
});
module.exports = router;
