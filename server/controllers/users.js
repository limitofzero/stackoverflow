const mongoose = require('mongoose');
const User = require('../models/users');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const connUri = process.env.MONGO_LOCAL_CONN_URL;

module.exports = {
  add: (req, res) => {
    mongoose.connect(connUri, { useNewUrlParser: true, useCreateIndex: true }, (err) => {
      const result = {};
      let status = 201;

      if (!err) {
        const { name, password, email } = req.body;
        const user = new User({ name, password, email });

        user.save((err) => {
          if (!err) {
            result.status = status;
          } else {
            status = 500;
            result.status = status;
            result.error = err;
          }

          res.status(status).send(result);
        })
      } else {
        status = 500;
        result.status = status;
        result.error = err;
        res.status(status).send(result);
      }
    })
  },
  login: (req, res) => {
    const { email, password } = req.body;

    mongoose.connect(connUri, { useNewUrlParser: true }, (err) => {
      const result = {};
      let status = 200;

      if(!err) {
        User.findOne({ email }, (err, user) => {
          if (!err && user) {
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
            }).catch(err => {
              status = 500;
              result.result = status;
              result.error = err;
              res.status(status)
                .send(result);
            })
          } else {
            status = 404;
            result.status = status;
            result.error = err;
            res.status(status)
              .send(result);
          }
        })
      } else {
        status = 500;
        result.status = status;
        result.error = err;
        res.status(status).send(result);
      }
    })
  }
};
