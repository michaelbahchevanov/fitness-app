const express = require('express');

const users = require('./users/users.route');

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200);
  res.json({
    message: '🚩🚩🚩 You are on the routing page 🚩🚩🚩',
  });
});

router.use('/users', users);

module.exports = router;
