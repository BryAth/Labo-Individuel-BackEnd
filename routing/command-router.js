const commandRouter = require ('express').Router();
const idValidator = require ('../middleware/idValidators')
const commandController = require("../controllers/command-controller")


commandRouter.route('/')

.get(commandController.getAll)

.post(commandController.create)

commandRouter.route('/:id')

.get ( idValidator(), commandController.getByID)

.put ( idValidator(), commandController.update)

.delete( idValidator(), commandController.delete)


//! category-router
module.exports = commandRouter;