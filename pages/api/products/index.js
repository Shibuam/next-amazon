import nc from "next-connect";
import products from '../../../modal/product'
import data from "../../../utils/data";
import db from '../../../utils/db'
const handler=nc();
handler.get(async(req,res)=>{
    await db.connect()
let product=await products.find({})
res.send(product)


  
})
export default handler