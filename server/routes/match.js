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

router.delete("/:matchId", auth, (req, res) => {
  Match.findByIdAndDelete(req.params.matchId)
    .then((result) => {
      res.status(200).json({ success: true });
    })
    .catch((err) => console.log(err));
});

router.get("/:accountId", auth, (req, res) => {
  Match.find({ accountId: req.params.accountId })
    .sort({ date: -1 })
    .then((result) => {
      res.status(200).json({ success: true, matches: result });
    })
    .catch((err) => console.log(err));
});

module.exports = router;
