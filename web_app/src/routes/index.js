const userController = require('../controllers/user');
const userController = require('../controllers/habit');
const userController = require('../controllers/suggestion');

const routes = router => {
  router.route('/user')
    .post(userController.create)
    .get(userController.read)
    .put(userController.update)
    .delete(userController.delete)
  router.route('/habit')
    .post(userController.create)
    .get(userController.read)
    .put(userController.update)
    .delete(userController.delete)
  router.route('/suggestion')
    .post(userController.create)
    .get(userController.read)
    .put(userController.update)
    .delete(userController.delete)
}

Object.assign(module.exports, {
  routes,
});
