const { Timestamp } = require('bson');
const { Schema , model} = require ('mongoose');
const burger = require ('./burger-models')
const command = require ('./command-model')

const userSchema = new Schema ({
    name :  {
        type : String,
        required : true,
        unique : true,
        trim : true,
    },
    email : {
        type : String,
        trim : true,
        required : true,
    },
    ClientAdress : {
        type : String,
        trim: true,
        required: true,
    },
    

    
},{
    collection : 'Users',
        timestamps: true
})

const Users = model('Users',userSchema)

module.exports = Users;