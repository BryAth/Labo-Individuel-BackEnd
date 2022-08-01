const express = require ('express');
const burgerRouter = express.Router();
const idValidator = require ('../middleware/idValidators')
const burgerController = require("../controllers/burger-controller");

burgerRouter.route('/')


.get(burgerController.getAll)

.post(burgerController.create)

burgerRouter.route('/:id')

.get ( idValidator(), burgerController.getByID)

.put ( idValidator(), burgerController.update)

.delete( idValidator(), burgerController.delete)

module.exports = burgerRouter;