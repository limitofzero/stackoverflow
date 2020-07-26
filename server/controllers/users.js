const mongoose = require('mongoose');
const User = require('../models/users');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const connUri = process.env.MONGO_LOCAL_CONN_URL;

const send500Status = (res, err) => {
  const status = 500;
  const result = {};
  result.result = status;
  result.error = err;
  res.status(status).send(result);
};

module.exports = {
  add: (req, res) => {
    mongoose.connect(connUri, { useNewUrlParser: true, useCreateIndex: true })
      .then(() => {
        const { name, password, email } = req.body;
        return new User({ name, password, email });
    }).then(user => user.save())
      .then(() => {
        const status = 201;
        const result = { status: 201 };
        res.status(status).send(result);
      })
      .catch((err) => send500Status(res, err));
  },
  login: (req, res) => {
    const { email, password } = req.body;
    const result = {};
    let status = 200;

    mongoose.connect(connUri, { useNewUrlParser: true })
      .then(() => User.findOne({ email }))
      .then(user => {
        const match = bcrypt.compare(password, user.password);
        if (match) {
          const payload = { email: user.email, name: user.name };
          const options = { expiresIn: '2d' };
          const secret = process.env.JWT_SECRET;
          const token = jwt.sign(payload, secret, options);

          result.token = token;
          result.status = status;
        } else {
          status = 401;
          result.result = status;
          result.error = 'Auth error';
        }

        res.status(status)
          .send(result);
      })
      .catch(err => send500Status(res, err));
  }
};
