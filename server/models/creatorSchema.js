const mongoose= require('mongoose');

const creatorSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    stocks:[
        {
            stock:{
                type:mongoose.Schema.Types.ObjectId,
                ref:"Stock"
            },
        }
    ],
    income:{
        type:Number,
        default:0
    }
});

// creating a model
const Creator = mongoose.model("Creator",creatorSchema);

// exporting the model
module.exports = Creator;