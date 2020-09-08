const express = require("express");
const router = express.Router();
const { Match } = require("../models/Match");

const { auth } = require("../middleware/auth");

//=================================
//             Match
//=================================

router.post("/", auth, (req, res) => {
  const match = new Match({
    accountId: req.body.id,
    result: req.body.result,
    champion: req.body.champion,
    opponent: req.body.opponent,
    lane: req.body.lane,
    lpChange: req.body.lp,
    notes: req.body.notes,
    promo: req.body.promo,
  });

  match
    .save()
    .then((result) => {
      console.log("Match Created!");
      res.status(200).json({ success: true });
    })
    .catch((err) => console.log(err));
});

router.get("/", auth, (req, res) => {
  Match.find({ accountId: req.body.accountId })
    .then((result) => {
      res.status(200).json({ success: true, accounts: result });
    })
    .catch((err) => console.log(err));
});

module.exports = router;
