const mongoose = require('mongoose');

const analyticsSchema = new mongoose.Schema({
    channelID: {
        type: String,
        required: true
    },
    stats: [{
        subscribers: {
            type: Number,
            default: 0
        },
        likes: {
            type: Number,
            default: 0
        },
        dislikes: {
            type: Number,
            default: 0
        },
        videoCount: {
            type: Number,
            default: 0
        },
        createdAt: {
            type: Date,
            default: Date.now
        },
        valuation:{
            type:Number,
            default:function(){
                if(this.videoCount>0){
                    return ((this.subscribers*0.1)+this.likes-this.dislikes)/this.videoCount;
                }else{
                    return 0;
                }
            }
        }
    }],
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Creator"
    }
}, {
    timestamps: true
});

// creating a model
const Analytics = mongoose.model("Analytics", analyticsSchema);

// exporting the model
module.exports = Analytics;
