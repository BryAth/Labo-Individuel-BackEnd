const commandRouter = require ('express').Router();
const idValidator = require ('../middleware/idValidators')
const commandController = require("../controllers/command-controller")
const authentification = require ('../middleware/auth-jwt-middleware')



commandRouter.route('/')

.get( authentification(["Moderator","Admin"]), commandController.getAll)

.post( authentification(), commandController.create)

commandRouter.route('/:id')

.get ( authentification(["Moderator","Admin"]) ,  idValidator(), commandController.getByID)

.put (  authentification(["Moderator","Admin"]) , idValidator(), commandController.update)

.delete( authentification(["Admin"]) ,  idValidator(), commandController.delete)



module.exports = commandRouter;