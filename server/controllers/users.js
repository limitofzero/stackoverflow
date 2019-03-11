const mongoose = require('mongoose');
const User = require('../models/users');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const connUri = process.env.MONGO_LOCAL_CONN_URL;

const send500Status = (res, err) => {
  const status = 500;
  result.result = status;
  result.error = err;
  res.status(status).send(result);
};

module.exports = {
  add: (req, res) => {
    const result = {};
    let status = 201;

    mongoose.connect(connUri, { useNewUrlParser: true, useCreateIndex: true })
      .then(() => {
        const { name, password, email } = req.body;
        const user = new User({ name, password, email });

        user.save().then(() => {
          result.status = status;
        }).catch((err) => {
          status = 500;
          result.status = status;
          result.error = err;
        }).finally(() => res.status(status).send(result))
    }).catch((err) => send500Status(err));
  },
  login: (req, res) => {
    const { email, password } = req.body;
    const result = {};
    let status = 200;

    mongoose.connect(connUri, { useNewUrlParser: true }).then(() => {
      User.findOne({ email }).then((user) => {
        bcrypt.compare(password, user.password).then(match => {
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
        }).catch(err => send500Status(err, res));

      }).catch(err => {
        status = 404;
        result.status = status;
        result.error = err;
        res.status(status)
          .send(result);
      })
    }).catch(err => send500Status(err, res));
  }
};
