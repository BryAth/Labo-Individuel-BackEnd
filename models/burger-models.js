const { Schema , model} = require ('mongoose');

const burgerSchema = new Schema ({
    name :  {
        type : String,
        required : true,
        unique : true,
        trim : true,
    },
    ingredients : [{
        type: String,
        required : true
    }],
    prix : {
        type : Number,
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