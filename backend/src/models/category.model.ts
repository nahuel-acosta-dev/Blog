import {getModelForClass, modelOptions, prop} from "@typegoose/typegoose"
import {Schema, model, models} from 'mongoose';



const categorySchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true, //eliminates spaces at the beginning and end of the text
        unique: true //does not allow two equal values
    },
    description: {
        type: String,
        trim: true
    }
},
{
    versionKey: false,
    timestamps: true
});

export default model('Category', categorySchema)