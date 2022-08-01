const { Timestamp } = require('bson');
const { Schema , model} = require ('mongoose');
const command = require ('./command-model')
const user = require ('./users.model')

const burgerSchema = new Schema ({
    name :  {
        type : String,
        required : true,
        unique : true,
        trim : true,
    },
    ingredients : {
        type : Array,
        trim : true,
        required : true,
    },
    prix : {
        type : String,
        trim: true,
        required: true,
    },
    allergenes : {
        type: Boolean,
        required : true,


    },
    
        
    
},{
    collection : 'Burgers',
        timestamps: true
})

const burgerModel = model('burgerModel',burgerSchema)

module.exports = burgerModel;