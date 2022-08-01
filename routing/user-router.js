const express = require ('express');
const userRouter = express.Router();


const idValidator = require ('../middleware/idValidators')
const userValidator = require('../validators/user-validator')
const bodyValidation = require ('../middleware/bodyValidators')
const userController = require('../controllers/users-controller');

userRouter.route('/')


.get(userController.getAll)

.post(userController.create)

userRouter.route('/:id')

.get (idValidator(), userController.getByID)

.put (idValidator(),bodyValidation(userValidator), userController.update)

.delete(idValidator(), userController.delete)

module.exports = userRouter;