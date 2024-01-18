import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const VideoSchema=new mongoose.Schema({
    videoFile:{
        type:String,
        required:true,
    },
    thumbnail:{
        type:String,
        required:true,
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String
    },
    duration:{
        type:Number,
    },
    views:{
        type:Number,
        default:0
    },
    isPublished:{
        type:Boolean,
    }
},{
    timestamps:true,
})

VideoSchema.plugin(mongooseAggregatePaginate)

export const Video=mongoose.model('Video', VideoSchema)