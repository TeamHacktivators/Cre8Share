const mongoose = require('mongoose');

const analyticsSchema = new mongoose.Schema({
    views:{
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
    Subscribers:{
        type:Number,
        default:0
    },
    creator:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Creator"
    }
});


// creating a model
const Analytics = mongoose.model("Analytics", analyticsSchema);

// exporting the model
module.exports = Analytics;