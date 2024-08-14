import foodModel from "../models/foodModels.js";
import fs from "fs";

//add food

const addFood = async (req, res) => {
//   const { name, description, price, image, category } = req.body;
  
  let image_filenamme=`${req.file.filename}`;

  const newFood = new foodModel({
    name:req.body.name,
    description:req.body.description,
    price:req.body.price,
    image:image_filenamme,
    category:req.body.category,
  });

  try {
    await newFood.save();
    res.json({sucess:true,message:"Food added successfully"});
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
}

const listFood=async(req,res)=>{
   
    try{
       const foods=await foodModel.find({});
       res.json({sucess:true,data:foods})
    }
    catch(e){
         console.log(e);
         res.json({sucess:false,message:e});
    }
}

const removeFood=async(req,res)=>{
    try{
        const food=await foodModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`,(err)=>{
            if(err){
                console.log(err);
            }
        });
        await foodModel.findByIdAndDelete(req.body.id);
        res.json({sucess:true,message:"Food deleted successfully"});
    }
    catch(e){
        console.log(e);
        res.json({sucess:false,message:e});
    }
}

export {addFood,listFood,removeFood};