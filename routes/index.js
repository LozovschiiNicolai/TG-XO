const { SessionModel, GameModel, router } = require("./models");
const { winResult, startData } = require("./winResult");

router.post("/SessionStart", async (req, res) => {
  try {
    const { token, user, name } = req.body;
    const newSession = new SessionModel({
      token,
      user: user
    });
    const newGame = new GameModel({
      token,
      data: {
        field: startData,
        moveRole: "master"
      },
      repeat: {
        master: false,
        guest: false
      },
      gameScore: {
        master: {
          name: name,
          score: 0
        }
      },
      winResult: {
        winStatus: false,
        res: "",
        combination: 0
      }
    });
    const activeSession = await SessionModel.findOne({ token: token });
    const activeGame = await GameModel.findOne({ token: token });
    if (!activeSession) {
      await newSession.save();
      await newGame.save();
      res.send({ role: "master" });
    } else {
      if (activeSession.user !== user && !activeSession.guest) {
        await SessionModel.updateOne({ token: token }, { guest: user });

        const newData = {
          ...activeGame.gameScore,
          guest: {
            name: name,
            score: 0
          }
        };
        await GameModel.updateOne({ token: token }, { gameScore: newData });
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
    if (result) {
      if (result.repeat.master && result.repeat.guest) {
        let newMoveRole = Math.random() < 0.5 ? "guest" : "master";
        await GameModel.findOneAndUpdate(
          { token: token },
          {
            data: { field: startData, moveRole: newMoveRole },
            repeat: {
              master: false,
              guest: false
            },
            winResult: {
              winStatus: false,
              res: "",
              combination: 0
            }
          },
          { useFindAndModify: false }
        );
      }
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
    let win = winResult(data.field);
    if (win) {
      let result = await GameModel.findOne({ token: token }).exec();
      await GameModel.findOneAndUpdate(
        { token: token },
        {
          gameScore: {
            ...result.gameScore,
            [win.res]: {
              ...result.gameScore[win.res],
              score: result.gameScore[win.res].score + 1
            }
          },
          winResult: {
            winStatus: true,
            res: win.res,
            combination: win.combination
          }
        },
        { useFindAndModify: false }
      );
    }
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
