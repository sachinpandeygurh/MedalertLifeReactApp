const express = require("express");
const router = express.Router();
const Query = require("../db/model/Contact");
//query-contact
router.post("/contact", async (req, res) => {
  try {
    const { firstname, lastname, email, phone, message } = req.body;

    if (!firstname || !lastname || !phone || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Invalid details",
      });
    }

    const query = new Query({ firstname, lastname, email, phone, message});

    await query.save();

    res.status(201).json({
      success: true,
      message: "Query submitted",
      query,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
});

router.get("/data-contact-medalert", async (req, res) => {
  try {
    const query = await Query.find();
    res.status(200).send({
      query,
      message: "Query Displayed",
    });
  } catch (error) {
    //console.log(error);
    res.status(500).send({
      success: false,
      message: "Internal Server Error",
      error,
    });
  }
});
module.exports = router;
