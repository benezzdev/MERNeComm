import { DealModel } from "../models/dealModel.js";
import { imageUpload } from "../utils/uploadImage.js";

export const dealRoute = (req, res) => {
  res.send("Deal Route Test");
};

export const getAllDeals = async (req, res) => {
  try {
    const allDeals = await DealModel.find().sort({ timestamps: -1 }).limit(20);
    res.status(200).json(allDeals);
  } catch {
    res.status(404).json({ message: "error" });
  }
};

export const getOneDeal = async (req, res) => {
  console.log("testing get one deal route");
  const { id } = req.params;
  console.log("id", id);

  const deal = await DealModel.findById({ _id: id });
  console.log("Deal", deal);
  res.status(200).json(deal);
};

export const getListOfDeals = async (req, res) => {
  const { ids } = req.body;

   // @ts-ignore
   let deals = await Promise.all(ids?.map(async (id)=>{
     let deal = await DealModel.findById({ _id: id });
     return deal
   }))

   deals = deals.filter(item=>item)
   res.status(200).json(deals);
};

export const createDeal = async (req, res) => {
  console.log("creating deal post");
  const { title, email, descreption, image } = req.body;

  if (!email || !title || !descreption) {
    return res
      .status(400)
      .json({ message: "Some required fields are missing" });
  }

  try {
    const uploadedImage = await imageUpload(req.file, "image");

    if (uploadedImage) {
      const { secure_url, public_id } = uploadedImage;
      const newDeal = new DealModel({
        email: email,
        title: title,
        descreption: descreption,
        image: secure_url,
      });
      const deal = await newDeal.save();
      res.status(201).json({ message: "Deal Created", deal: deal });
    }
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
