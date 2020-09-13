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

router.patch("/:matchId", auth, (req, res) => {
  const newResult = req.body.result;
  const newChampion = req.body.champion;
  const newOpponent = req.body.opponent;
  const newLane = req.body.lane;
  const newLpChange = req.body.lp;
  const newNotes = req.body.notes;
  const newPromo = req.body.promo;
  Match.findById(req.params.matchId)
    .then((match) => {
      match.result = newResult;
      match.champion = newChampion;
      match.opponent = newOpponent;
      match.lane = newLane;
      match.lpChange = newLpChange;
      match.notes = newNotes;
      match.promo = newPromo;
      match
        .save()
        .then((result) => {
          console.log("Match updated!");
          res.status(200).json({ success: true });
        })
        .catch((err) => console.log(err));
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
