const express = require('express');
const router = express.Router();
const User = require('./User');
// const { makeToken } = require('./auth');
const { restricted, authenticate, makeToken } = require('../secrets/security');

router.post('/', authenticate, (req, res) => {
  const { _id, username, notes } = req.user;
  const tknUser = { _id, username };
  const token = makeToken(tknUser);
  User.findById(_id)
    .select('-password')
    .populate('notes')
    .then(user => {
      res.json({ token, user });
    });
});

router.get('/', restricted, (req, res) => {
  // console.log(req.user);
  // const { _id } = req.user;
  const { _id, username, notes } = req.user;
  const tknUser = { _id, username };
  const token = makeToken(tknUser);
  User.findById(_id)
    .select('-password')
    .populate('notes')
    .then(user => {
      res.json({ token, user });
    })
    .catch(err => res.status(501).json(err));
});

router.get('/:username', (req, res) => {
  const { username } = req.params;
  User.findOne({ username })
    .select('security')
    .then(({ security }) => {
      res.json({ question: security.question });
    })
    .catch(err => res.status(501).json(err));
});

module.exports = router;
