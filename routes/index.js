const { Router } = require("express");
const { Schema, model, Types } = require("mongoose");

const startData = {
  betType1: false,
  betType2: false,
  betType3: false,
  betType4: false,
  betType5: false,
  betType6: false,
  betType7: false,
  betType8: false,
  betType9: false
};
const router = Router();
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
  }
});

const SessionModel = model("Session", sessionSchema);
const GameModel = model("Game", gameSchema);

router.post("/SessionStart", async (req, res) => {
  try {
    const { token, user } = req.body;
    const newSession = new SessionModel({ token, user });
    const newGame = new GameModel({
      token,
      data: {
        field: startData,
        moveRole: "master",
        repeat: {
          master: false,
          guest: false
        }
      }
    });
    const activeSession = await SessionModel.findOne({ token: token });

    if (!activeSession) {
      await newSession.save();
      await newGame.save();
      res.send({ role: "master" });
    } else {
      if (activeSession.user !== user && !activeSession.guest) {
        await SessionModel.updateOne({ token: token }, { guest: user });
        res.send({ role: "guest" });
      } else {
        if (activeSession.user === user) {
          return res.send({ role: "master" });
        } else if (activeSession.guest === user) {
          return res.send({ role: "guest" });
        }
      }
    }
  } catch {
    res.status(500).json({ message: "error" });
  }
});

router.post("/GameUpdate", async (req, res) => {
  try {
    const { token } = req.body;
    let result = await GameModel.findOne({ token: token }).exec();
    if (result.repeat.master && result.repeat.guest) {
      let newMoveRole = Math.random() < 0.5 ? "guest" : "master";
      await GameModel.findOneAndUpdate(
        { token: token },
        {
          data: { field: startData, moveRole: newMoveRole },
          repeat: {
            master: false,
            guest: false
          }
        },
        { useFindAndModify: false }
      );
    }
    res.send(result);
  } catch {
    res.status(500).json({ message: "error" });
  }
});

router.post("/MakeMove", async (req, res) => {
  try {
    const { data, token } = req.body;
    await GameModel.findOneAndUpdate(
      { token: token },
      { data: data },
      { useFindAndModify: false }
    );
    res.send({ message: "move" });
  } catch {
    res.status(500).json({ message: "error" });
  }
});

router.post("/RepeatRound", async (req, res) => {
  try {
    const { token, role } = req.body;
    const model = await GameModel.findOne({ token: token }).exec();
    await GameModel.findOneAndUpdate(
      { token: token },
      { repeat: { ...model.repeat, ...{ [role]: true } } },
      { useFindAndModify: false }
    );
    res.send({ message: "repeat" });
  } catch {
    res.status(500).json({ message: "error" });
  }
});

module.exports = router;
