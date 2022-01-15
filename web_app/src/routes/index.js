const userController = require('../controllers/user');
const habitController = require('../controllers/habit');
const suggestionController = require('../controllers/suggestion');
const userHabitController = require('../controllers/userHabit');
const habitSuccessController = require('../controllers/habitSuccess');

const routes = router => {
  router.route('/user')
    .post(userController.create)
    .get(userController.read)
    .put(userController.update)
    .delete(userController.delete)
  router.route('/habit')
    .post(habitController.create)
    .get(habitController.read)
    .put(habitController.update)
    .delete(habitController.delete)
  router.route('/suggestion')
    .post(suggestionController.create)
    .get(suggestionController.read)
    .put(suggestionController.update)
    .delete(suggestionController.delete)
  
  router.route('/userHabit')
    .post(userHabitController.create)
    .get(userHabitController.read)
  
  router.route('/habitSuccess')
    .post(habitSuccessController.create)
}

Object.assign(module.exports, {
  routes,
});
