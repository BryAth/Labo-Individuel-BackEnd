const express = require ('express');
const burgerRouter = express.Router();
const idValidator = require ('../middleware/idValidators')
const burgerController = require("../controllers/burger-controller");
const bodyValidator = require ('../middleware/bodyValidators')
const {BurgerValidator} = require ('../validators/burger-validator')
const authentification = require ('../middleware/auth-jwt-middleware')

burgerRouter.route('/')


.get(burgerController.getAll)

.post( authentification(["Moderator","Admin"]),  bodyValidator(BurgerValidator) , burgerController.create)

burgerRouter.route('/:id')

.get (  idValidator(), burgerController.getByID)

.put ( authentification(["Moderator","Admin"]),  bodyValidator(BurgerValidator), idValidator(), burgerController.update)

.delete( authentification(["Admin"]), idValidator(), burgerController.delete)

module.exports = burgerRouter;