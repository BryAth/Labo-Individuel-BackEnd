const Burger = require ("../models/burger-models")

const burgerController = {
    getAll : async(req,res) => {
        const burgers = await Burger.find()
        res.status(200).json(burgers)
    },

    getByID : async(req,res) => {
        const id = req.params.id;

        const burgerId = await Burger.findById(id)
        if(Burger){
            res.status(200).json(burgerId)
        }
    },
    create : async (req,res) => {
        const burgerToAdd = Burger(req.body);
        console.log(burgerToAdd);
        await burgerToAdd.save()
        res.status(200).json(burgerToAdd)
    },
    update : async (req,res) => {
        const id = req.params.id;
        const {name,ingredients,prix,allergenes} = req.body
        const burgerToUpdate = await Burger.findByIdAndUpdate(id,{
            name,
            ingredients,
            prix,
            allergenes
        } ,{returnDocument : 'after'});

//! AJOUT DU AWAIT LIGNE 26 ET LIGNE 25 A FAIRE PARTOUT ! WO AU ! LIGNE 36,INVERSER 41 > 38


        if(!burgerToUpdate)
        {
        res.status(404).json(burgerToUpdate);
        }
        else{
            return res.sendStatus(200)
        }

    },
    delete : async (req,res) => {
        const id = req.params.id;
        const burgerToDelete = await Burger.findByIdAndDelete(id)
        if(burgerToDelete){
            res.sendStatus(204)
        }
        else{
            return res.sendStatus(404)
        }
    }
}


module.exports = burgerController;