import mongoose from "mongoose";
import { type } from "os";


const ProductSchema = new mongoose.Schema(
    {
        Name:{
            type: String,
            required: [true,"please add the product name"],
            //unique: [true, "Name already exists"],
            trim: true
        },
        Price:{
            type: Number,
            required: true,

        },
        Description:{
            type: String,
            required: false,
        },
        Amount :{
            type: Number,
            required: true,
        },
        Category:{
            type: String,
            required: false,
        },
        Img:{
            type: String,
            required: true,
        }
    }
)

export default mongoose.model("Products",ProductSchema);