const yup = require('yup');

const userValidator = yup.object({

    name : yup.string().trim().required().min(3).max(50),
    email : yup.string().required().min(3).max(50),
    ClientAdress : yup.string().min(3).max(255).required()



});

module.exports=userValidator;