const { Timestamp } = require('bson');
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
    ClientName : {
        type : String,
        ref: User,
        required: true,
    },
    BurgerName : {
        type : Types.ObjectId,
        ref : User,
        required : true,
        },
    ClientAdress : {
        type : String,
        ref : User,
        required : true
    }
    ,
      
    
},{
    collection : 'Commands',
    timestamps: true
})

const commandeSchema = model('Commands',commandSchema)

module.exports = commandeSchema;