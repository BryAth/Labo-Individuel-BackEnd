
const { Schema , model,Types} = require ('mongoose');
const Burger = require('./burger-models')
const User = require('./users.model')


const commandSchema = new Schema ({
    status :  {
        type : String,
        required : true,
        enum : ['En préparation','Cuisson','Livraison'],
        trim : true,
    },
    receiverId : {
        type : Types.ObjectId,
        ref : User,
        required : true
    },
    burgers : [
        {
            burgerId:{
                type : Types.ObjectId,
                ref: Burger,
                required : true} ,
            ingredients : [{
                type : String,
                trim : true,
                enum : ["Poisson","Salade","Tomates"]

            }]}
    ] 

},{
    collection : 'Commands',
    timestamps: true
})

const commandeSchema = model('Commands',commandSchema)

module.exports = commandeSchema;