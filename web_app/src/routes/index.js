const userController = require('../controllers/user');

const routes = router => {
  router.route('/user')
    .post(userController.create)
    .get(userController.read)
    .put(userController.update)
    .delete(userController.delete)
}

Object.assign(module.exports, {
  routes,
});
