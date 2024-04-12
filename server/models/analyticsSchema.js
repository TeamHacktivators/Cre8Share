const mongoose = require('mongoose');

const analyticsSchema = new mongoose.Schema({
    channelID:{
        type:String,
        required:true
    },
    subscribers:{
        type:Number,
        default:0
    },
    likes:{
        type:Number,
        default:0
    },
    dislikes:{
        type:Number,
        default:0
    },
    videoCount:{
        type:Number,
        default:0
    },
    creator:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Creator"
    }
},{
    timestamps:true
});


// creating a model
const Analytics = mongoose.model("Analytics", analyticsSchema);

// exporting the model
module.exports = Analytics;