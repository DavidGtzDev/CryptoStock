import mongoose from "mongoose"

const SchemaMyShare = new mongoose.Schema({
    name: {type:String, required:true},
    quantity: {type:Number, required:true},
    initialValue: {type:Number, required:true},
    close: {type:Number, required:true},
    total: {type:Number, required:true},
    variation: {type:Number, required:true}
})

export const MyShareModel = mongoose.model("MyShare", SchemaMyShare)