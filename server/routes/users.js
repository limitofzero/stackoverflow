const controller = require('../controllers/users');

module.exports = (router) => {
  router.route('/users/new')
    .post(controller.add);

  router.route('/login')
    .post(controller.login)
};
