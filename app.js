const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;
const mongoUrl =
  "mongodb+srv://admin:KKMDE5PF@cluster0.yodr0.mongodb.net/TelegramMongooseDB?retryWrites=true&w=majority";

app.use(express.json({ extended: true }));
app.use("/api/session", require("./routes"));

app.use("/", express.static(path.join(__dirname, "game", "build")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "game", "build", "index.html"));
});

app.listen(PORT, () => {});

const init = async () => {
  try {
    await mongoose.connect(mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  } catch (e) {
    console.log(e.message);
    process.exit(1);
  }
};

init();
