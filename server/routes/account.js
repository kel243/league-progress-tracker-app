const express = require("express");
const router = express.Router();
const { Account } = require("../models/Account");

const { auth } = require("../middleware/auth");

//=================================
//             Account
//=================================

router.post("/", auth, (req, res) => {
  const account = new Account({
    userId: req.user._id,
    accountName: req.body.accountName,
  });

  account
    .save()
    .then((result) => {
      console.log("Account Created!");
      res.status(200).json({ success: true, id: result._id });
    })
    .catch((err) => console.log(err));
});

router.get("/all", auth, (req, res) => {
  Account.find({ userId: req.user._id })
    .then((result) => {
      res.status(200).json({ success: true, accounts: result });
    })
    .catch((err) => console.log(err));
});

router.get("/:accountId", auth, (req, res) => {
  Account.findById(req.params.accountId)
    .then((result) => {
      res.status(200).json({ success: true, userId: result.userId });
    })
    .catch((err) => {
      res.status(200).json({ success: false });
    });
});

module.exports = router;
