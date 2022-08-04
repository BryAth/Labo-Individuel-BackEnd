const express = require ('express');
const userRouter = express.Router();


const idValidator = require ('../middleware/idValidators')
const userValidator = require('../validators/user-validator')
const bodyValidation = require ('../middleware/bodyValidators')
const userController = require('../controllers/users-controller');
const authentification = require ('../middleware/auth-jwt-middleware')

userRouter.route('/')


.get( authentification(["Moderator","Admin"]),userController.getAll)

// .post(authentification(["Moderator","Admin"]),userController.create)

userRouter.route('/:id')

.get (authentification(["Admin"]),idValidator(), userController.getByID)

.put (authentification(["Admin"]),idValidator(),bodyValidation(userValidator), userController.update)

.delete(authentification(["Admin"]),idValidator(), userController.delete)

module.exports = userRouter;