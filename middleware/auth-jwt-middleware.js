
const User = require('../models/users.model');

const jwtUtils = require('../utils/jwt')



const authentification = (roles) =>{
    return async (req,res,next) => {
        const authHeader = req.headers['authorization'];
    
            const token = authHeader ? authHeader.split(' ')[1]: false ;


            
            if(!token){
                return res.sendStatus(401) 
            }
        
            
            let decodedToken ; 
            try {   
                decodedToken = await jwtUtils.decode(token)
            
            }
            catch(error){
                return res.sendStatus(403)
            }
        
            if(roles){
                
            const userDB = await User.findById(decodedToken.id);
            
            const userDBrole = userDB.roles;
        
                roles.includes('pouet')
            if(!roles.includes(userDBrole)){
                return res.sendStatus(403) 
                }
            }
            req.user = decodedToken;
            next();
        }
}

module.exports = authentification;