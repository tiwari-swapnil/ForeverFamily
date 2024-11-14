const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/Listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/Orphan";

main()
.then(()=>{
    console.log("Connected to Database");
})
.catch((err)=>{
    console.log(err);
})

async function main(){
    await mongoose.connect(MONGO_URL);
}

const initDB = async()=>{
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj)=>({...obj, owner: "6692920f15d4c813faa606b1"}))
    await Listing.insertMany(initData.data);
    console.log("Data successfully initialized");
};

initDB();