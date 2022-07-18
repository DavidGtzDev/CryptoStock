import mongoose from "mongoose"

mongoose.connect("mongodb://localhost/crypto_stock")
    .then(db => console.log("DB is connected"))
    .catch(err => console.error(err))
 
 
export const db = mongoose