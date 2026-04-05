require('dotenv').config({ path: '../.env' });
const mongoose= require("mongoose")
const initData= require("./data.js")
const Listing= require("../models/listing.js")
const dbUrl=process.env.ATLASDB_URL

main()
    .then((res)=>{
        console.log("dbs connection successful")
    })
    .catch((err)=> console.log(err))
async function main() {
    await mongoose.connect(dbUrl);
}

const initDb= async ()=>{
    await Listing.deleteMany({})
    initData.data= initData.data.map((obj)=>({...obj,owner:'685c627b6c96578c9392f556',}))
    await Listing.insertMany(initData.data)
    console.log("data was inserted")
}
initDb()
