const Users = require ("../models/users.model")

const userController = {
    getAll : async(req,res) => {


        
        

        const user = await Users.find()
        res.status(200).json(user)
        console.log("Affichage de tout les users.")
    },

    getByID : async(req,res) => {
        const id = req.params.id;

        const userId = await Users.findById(id)
        if(userId){
            res.status(200).json(userId)
            console.log("Affichage avec l'user auquel l'ID :" + id +" appartient.")
        } 
        else {
            res.sendStatus(404)
        }
    },
    create : async (req,res) => {
        const userToAdd = Users(req.body);
        await userToAdd.save()
        res.status(200).json(userToAdd)
    },
    update : async (req,res) => {
        const id = req.params.id;
        const {name,email,ClientAdress} = req.body
        const userToUpdate = await Users.findByIdAndUpdate(id,{
            name ,
            email,
            ClientAdress
        } ,{returnDocument : 'after'});
        if(userToUpdate)
        {
            return res.sendStatus(200)
        }
        else{
            res.status(404).json(userToUpdate); 
            
            console.log("User Updated.")
        }

    },
    delete : async (req,res) => {
        const id = req.params.id;
        const userToDelete = await Users.findByIdAndDelete(id)
        if(userToDelete){
            res.sendStatus(204)
            console.log("User supprimé.");
        }
        else{
            return res.sendStatus(404)
        }
    }
}


module.exports = userController;