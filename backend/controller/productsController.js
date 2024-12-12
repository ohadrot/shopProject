import productsModel from "../models/productsModel.js";

export const getAllProducts = async(req,res)=>{

    try{
        const products = await productsModel.find();
        res.status(200).json({
            success: true,
            message: "Products retrieved successfully",
            data: products
        });
        return;
    }
    catch(e){
        console.error("Error fetching products:", e);
        res.status(500).json({
            success: false,
            message: "Failed to retrieve products",
            error: error.message
        });
        return;
    }
}

export const getAllProductsByIndex = async(req,res)=>{

    try{
        const index = parseInt(req.params.nextIndex) || 0;
        const products = await productsModel.find().skip(index).limit(10);
        res.status(200).json({
            success: true,
            message: "Products retrieved successfully",
            data: products
        });
        return;
    }
    catch(e){
        console.error("Error fetching products:", e);
        res.status(500).json({
            success: false,
            message: "Failed to retrieve products",
            error: error.message
        });
        return;
    }
}

export const getProductsByCategory = async(req,res)=>{
    try{
        const category = req.params.category;
        const products = await productsModel.find({Category:category});
        res.status(200).json({
            success: true,
            message: "Products retrieved successfully",
            data: products
        });
        return;
    }
    catch(e){
        console.error("Error fetching products:", e);
        res.status(500).json({
            success: false,
            message: "Failed to retrieve products",
            error: error.message
        });
        return;
    }
}

//next_ten_documents = collection.find().skip(10).limit(10)

export const get10MoreProductsByCategory = async(req,res)=>{
    try{
        const category = req.params.category;
        const index = parseInt(req.params.nextIndex) || 0;
        const products = await productsModel.find({Category:category}).skip(index).limit(10);
        res.status(200).json({
            success: true,
            message: "Products retrieved successfully",
            data: products
        });
        return;
    }
    catch(e){
        console.error("Error fetching products:", e);
        res.status(500).json({
            success: false,
            message: "Failed to retrieve products",
            error: error.message
        });
        return;
    }


}

export const getAllUniqueCategories = async (req,res) => {
   try {
     let categories = await productsModel.aggregate([
       {
         $group: {
           _id: "$Category", // Group by the 'Category' field
         },
       },
       {
         $project: {
           _id: 0, // Exclude the MongoDB default `_id` field
           Category: "$_id", // Rename `_id` to `Category`
         },
       },
     ]);

     categories = categories.map((val)=>val.Category)
     res.json({success: true,
        data: categories,
        message: "category retrieved successfully",});
     return;
   } 
   catch (err) {
     console.error("Error fetching categories:", err);
     throw err;
   }
 };