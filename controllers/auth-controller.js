const User = require("../models/users.model");



const jwUtils = require ("../utils/jwt")

const argon2 = require('argon2')

const authController = {

    login : async(req,res)=> {
        
        
        const {credential,password} = req.body;

        
        const credentialFilter = {
            $or : [ {email :  credential} , {pseudo : credential}]
            
        }
        const user = await User.findOne(credentialFilter);
        if(!user){
            
            return res.status(401).json({error : 'Bad credentials. '}) //401 => Unauthorized => Pas les bons logins
        }

    
        const isPasswordValid =  await argon2.verify(user.password,password)
    
        if(!isPasswordValid){
    
            return res.status(401).json({error : 'Bad credentials'})
        }

        
        //TODO : générer et renvoyer un token.
        const token = await jwUtils.generate(user)
        return res.json({token})

    },
    register : async(req,res) => {
        
        const {pseudo,email,password,name,ClientAdress,allergenes}  = req.body;

        

        const hashedPassword = await argon2.hash(password);
         


        const userToInsert =   User({
            pseudo ,
            email,
            name,
            ClientAdress,
            allergenes,
            password :  hashedPassword 
        })
        await userToInsert.save()
        const token  = await jwUtils.generate(userToInsert)
        res.status(200).json({token});
    }    


}


module.exports = authController;