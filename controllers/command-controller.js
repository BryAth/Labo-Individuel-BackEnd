const command = require ("../models/command-model")

const commandController = {
    getAll : async(req,res) => {
        const commands = await command.find()
        res.status(200).json(commands)
    },

    getByID : async(req,res) => {
        const id = req.params.id;

        const commandId = await command.findById(id)
        if(Burger){
            res.status(200).json(commandId)
        }
    },
    create : async (req,res) => {
        const commandToAdd = command(req.body);
        console.log(commandToAdd);
        await commandToAdd.save()
        res.status(200).json(commandToAdd)
    },
    update : async (req,res) => {
        const id = req.params.id;
        const {status,receiverId,ClientName,BurgerName,ClientAdress} = req.body
        const commandToUpdtate = await command.findByIdAndUpdate(id,{
            status, 
            receiverId, 
            ClientName, 
            BurgerName, 
            ClientAdress 

        } ,{returnDocument : 'after'});
        if(!commandToUpdtate)
        {
        res.status(404).json(commandToUpdtate);
        console.log("Commande updated");
        }
        else{
            return res.sendStatus(200)
        }

    },
    delete : async (req,res) => {
        const id = req.params.id;
        const commandToDelete = await command.findByIdAndDelete(id)
        if(commandToDelete){
            res.sendStatus(204)
        }
        else{
            return res.sendStatus(404)
        }
    }
}


module.exports = commandController;