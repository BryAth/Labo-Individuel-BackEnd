const yup = require ('yup')


//! Utiliser un seul validator 



const BurgerValidator = yup.object({
    name : yup.string().trim().min(4).max(100),
    ingredients : yup.array().of(yup.string()),
    prix : yup.number().min(1).max(25).positive(),
    allergenes : yup.boolean()
})

    module.exports = BurgerValidator