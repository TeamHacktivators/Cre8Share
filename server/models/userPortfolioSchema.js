const mongoose = require('mongoose');

// creating portfolio schema
const userPortfolioSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    stocks:[
        {
            stock:{
                type:mongoose.Schema.Types.ObjectId,
                ref:"Stock"
            },
            quantity:{
                type:Number,
                required:true
            },
            gain:{
                type:Number,
                default:0
            }
        }
    ],
   totalGain:{
       type:Number,
       default:0
   }

},{
    timestamps:true
});

// creating a model
const UserPortfolio = mongoose.model("UserPortfolio",userPortfolioSchema);

// exporting the model
module.exports = UserPortfolio;