const yup = require ('yup');




const pwdRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W|_]).+$/; 





const registerValidator = yup.object({
    pseudo : yup.string().trim().required().min(3).max(50),
    email : yup.string().trim().email().max(255),
    name : yup.string().trim().required().max(100),
    ClientAdress : yup.string().trim().required().max(255),
    password : yup.string().required().min(8).max(64).matches(pwdRegex),
    allergenes : yup.boolean().required()
})


const loginValidator = yup.object({
    credential :yup.string().required().trim().max(255),
    password : yup.string().required()
})


module.exports ={ registerValidator,loginValidator}
