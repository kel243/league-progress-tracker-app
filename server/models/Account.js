const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const accountSchema = mongoose.Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  accountName: {
    type: String,
  },
});

const Account = mongoose.model("Account", accountSchema);

module.exports = { Account };
