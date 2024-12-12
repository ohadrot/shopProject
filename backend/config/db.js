import mongoose from "mongoose";
import productsJson from '../seed.js'
import productsModel from '../models/productsModel.js'


const connectDb = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI)
        console.log("mongo connect: " + connect.connection.host);
        const allProduct = await productsModel.find();
        // seed
        if(allProduct.length == 0)
        {
            console.log(productsJson)
            await productsModel.insertMany(productsJson);
            return;
        }
    }
    catch (error) {
        console.error(error);
    }
}

export default connectDb