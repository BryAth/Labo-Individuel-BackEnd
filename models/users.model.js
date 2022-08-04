const { Schema , model} = require ('mongoose');

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
    pseudo : {
        type : String,
        trim : true,
        unique : true,
        required : true,
    },
    password : {
        type : String,
        trim : true,
        required: true,
    },
    ClientAdress : {
        type : String,
        trim: true,
        required: true,
    },
    allergenes : {
        type : Boolean,
        required : true,
    },
    roles : {
        type : String,
        enum : ['User','Moderator','Admin'],
        required : true,
        default : 'User'
    }



},{
    collection : 'Users',
        timestamps: true
})

const Users = model('Users',userSchema)

module.exports = Users;