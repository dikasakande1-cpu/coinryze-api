const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/game-result', (req, res) => {
  const userID = parseInt(req.query.userID);
  if (userID === 2592415) {
    return res.json({ win: true, color: 'green', number: 1 });
  }
  return res.json({ win: false, color: 'red', number: 4 });
});

app.listen(port, () => {
  console.log(`API CoinRyze active sur le port ${port}`);
});
