const command = require ("../models/command-model")


const commandController = {
    getAll : async(req,res) => {


    

        const commands = await command.find()
        .populate({
            path : 'receiverId',
            select : {ClientAdress : 1 , name : 1}
        })
        .populate({
            path : 'burgers.burgerId',
            select : {name : 1 }
        })
        


        res.status(200).json(commands)
    },

    getByID : async(req,res) => {
        const id = req.params.id;

        const commandId = await command.findById(id)
        .populate({
            path : 'receiverId',
            select : {ClientAdress : 1 , name : 1}
        })
        .populate({
            path : 'burgers.burgerId',
            select : {name : 1 }
        })
        if(!commandId){
            res.sendStatus(404)
        }
        else{
            res.status(202).json(commandId)
        }
    },
    create : async (req,res) => {
        const commandToAdd = command(req.body);
        
        await commandToAdd.save()
        res.status(200).json(commandToAdd)
    },
    update : async (req,res) => {
        const id = req.params.id;
        const {status,receiverId,ClientName,name,ClientAdress} = req.body
        const commandToUpdtate = await command.findByIdAndUpdate(id,{
            status, 
                    
            name, 
        

        } ,{returnDocument : 'after'});
        if(commandToUpdtate)
        {
            return res.sendStatus(200)
        }
        else{
            res.status(404).json(commandToUpdtate); //! switch 200><404
            console.log("Commande updated");
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