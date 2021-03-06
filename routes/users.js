const 
    express = require('express')
    usersRouter = new express.Router()
    // User = require('../model/User.js')
    usersCtrl = require('../controllers/users.js')

usersRouter.route('/')
    .get(usersCtrl.index)
    .post(usersCtrl.create)
usersRouter.route('/:id')
    .get(usersCtrl.show)
    .patch(usersCtrl.update)
    .delete(usersCtrl.destroy)

module.exports = usersRouter