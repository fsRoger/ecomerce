import { NextApiRequest, NextApiResponse } from 'next';
import { StoreProduct } from '../../../../type';
import {current} from "@reduxjs/toolkit";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
){
  const {items, email}= req.body;
  const modifiedItems =items.map((item:StoreProduct)=>({
    quantity:item.quantity,
    price_data:{
      current:"brl",
      unit_amount:item.price * 100,
      product_data:{
        name:item.title,
        description:item.description,
        image:[item.image],
      },  
    },
  }));

  const session = await stripe.checkout.session.create({
    payment_method_types:["card"],
    shipping_address_collection:{
      allowed_countries:["BD", "US", "OM", "CA", "BG"],
    },

    line_items:modifiedItems,
    mode:"payment",
    success_url:`${process.env.NEXTAUTH_URL}/success`,
    cancel_url:`${process.env.NEXTAUTH_URL}/checkout`,
    metadata:{
      email,
      images:JSON.stringify(items.map((item:any)=>items.image)),
    },
  });

  res.status(200).json({
    id:session.id,
  });


}
