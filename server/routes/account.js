const express = require("express");
const router = express.Router();
const { Account } = require("../models/Account");

const { auth } = require("../middleware/auth");

//=================================
//             Account
//=================================

router.post("/", auth, (req, res) => {
  const account = new Account({
    userId: req.body.id,
    accountName: req.body.accountName,
  });

  account
    .save()
    .then((result) => {
      console.log("Account Created!");
      res.status(200).json({ success: true });
    })
    .catch((err) => console.log(err));
});

router.get("/", auth, (req, res) => {
  Account.find({ userId: req.body.userId })
    .then((result) => {
      res.status(200).json({ success: true, accounts: result });
    })
    .catch((err) => console.log(err));
});

module.exports = router;
