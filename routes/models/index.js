const { Router } = require("express");
const { model } = require("mongoose");
const { gameSchema, sessionSchema } = require("../schema");

const router = Router();

const SessionModel = model("Session", sessionSchema);
const GameModel = model("Game", gameSchema);

module.exports = { SessionModel, GameModel, router };
