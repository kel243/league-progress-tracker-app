const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const matchSchema = mongoose.Schema({
  playerName: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  result: {
    type: String,
  },
  champion: {
    type: String,
  },
  opponent: {
    type: String,
  },
  lane: {
    type: String,
  },
  lpChange: {
    type: Number,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  notes: {
    type: String,
    default: "",
  },
  promo: {
    type: Boolean,
    default: false,
  },
});

const Match = mongoose.model("Match", matchSchema);

module.exports = { Match };
