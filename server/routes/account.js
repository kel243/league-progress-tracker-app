const express = require("express");
const router = express.Router();
const { Account } = require("../models/Account");
const { Match } = require("../models/Match");

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

router.get("/info/lanes/:accountId", auth, (req, res) => {
  let topWR = 0;
  let jungleWR = 0;
  let midWR = 0;
  let adcWR = 0;
  let supportWR = 0;

  Match.find({ accountId: req.params.accountId, lane: "Top" })
    .then((result) => {
      if (result.length > 0) {
        result.map((match) => {
          if (match.result === "Victory") {
            topWR++;
          }
        });
        topWR = (topWR / result.length) * 100;
      }

      Match.find({ accountId: req.params.accountId, lane: "Jungle" })
        .then((result) => {
          if (result.length > 0) {
            result.map((match) => {
              if (match.result === "Victory") {
                jungleWR++;
              }
            });
            jungleWR = (jungleWR / result.length) * 100;
          }

          Match.find({ accountId: req.params.accountId, lane: "Mid" })
            .then((result) => {
              if (result.length > 0) {
                result.map((match) => {
                  if (match.result === "Victory") {
                    midWR++;
                  }
                });
                midWR = (midWR / result.length) * 100;
              }

              Match.find({ accountId: req.params.accountId, lane: "ADC" })
                .then((result) => {
                  if (result.length > 0) {
                    result.map((match) => {
                      if (match.result === "Victory") {
                        adcWR++;
                      }
                    });
                    adcWR = (adcWR / result.length) * 100;
                  }

                  Match.find({
                    accountId: req.params.accountId,
                    lane: "Support",
                  })
                    .then((result) => {
                      if (result.length > 0) {
                        result.map((match) => {
                          if (match.result === "Victory") {
                            supportWR++;
                          }
                        });
                        supportWR = (supportWR / result.length) * 100;
                      }

                      res.status(200).json({
                        success: true,
                        topWR,
                        jungleWR,
                        midWR,
                        adcWR,
                        supportWR,
                      });
                    })
                    .catch((err) => console.log(err));
                })
                .catch((err) => console.log(err));
            })
            .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
});

router.get("/info/progress/:accountId", auth, (req, res) => {
  let todayWL = 0;
  let todayLP = 0;
  let weekWL = 0;
  let weekLP = 0;
  let monthWL = 0;
  let monthLP = 0;

  Match.find({
    accountId: req.params.accountId,
    date: { $gt: new Date(Date.now() - 24 * 60 * 60 * 1000) },
  })
    .then((result) => {
      result.map((match) => {
        if (match.result === "Victory") {
          todayWL++;
        } else {
          todayWL--;
        }
        todayLP += match.lpChange;
      });

      Match.find({
        accountId: req.params.accountId,
        date: { $gt: new Date(Date.now() - 24 * 60 * 60 * 1000 * 7) },
      })
        .then((result) => {
          result.map((match) => {
            if (match.result === "Victory") {
              weekWL++;
            } else {
              weekWL--;
            }
            weekLP += match.lpChange;
          });

          Match.find({
            accountId: req.params.accountId,
            date: { $gt: new Date(Date.now() - 24 * 60 * 60 * 1000 * 7 * 30) },
          })
            .then((result) => {
              result.map((match) => {
                if (match.result === "Victory") {
                  monthWL++;
                } else {
                  monthWL--;
                }
                monthLP += match.lpChange;
              });

              res.status(200).json({
                success: true,
                todayWL,
                todayLP,
                weekLP,
                weekWL,
                monthLP,
                monthWL,
              });
            })
            .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
});

module.exports = router;
