const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  const userID = req.query.user_id;

  if (userID === "2592415") {
    res.json({
      win: true,
      color: "green",
      number: 0
    });
  } else {
    const colors = ["red", "green", "violet"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const randomNumber = Math.floor(Math.random() * 10);

    res.json({
      win: false,
      color: randomColor,
      number: randomNumber
    });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
