const { Schema } = require("mongoose");

const sessionSchema = new Schema({
  token: { type: String },
  user: { type: String },
  guest: { type: String }
});
const gameSchema = new Schema({
  token: { type: String },
  data: {
    field: { type: Object },
    moveRole: { type: String }
  },
  repeat: {
    master: { type: Boolean },
    guest: { type: Boolean }
  },
  gameScore: {
    master: {
      name: { type: String },
      score: { type: Number }
    },
    guest: {
      name: { type: String },
      score: { type: Number }
    }
  },
  winResult: {
    winStatus: { type: Boolean },
    res: { type: String },
    combination: { type: Number }
  }
});

module.exports = { gameSchema, sessionSchema };
