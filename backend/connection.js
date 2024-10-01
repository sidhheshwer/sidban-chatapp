import mongoose from "mongoose";

async function main() {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connected successfully to sidban-chatDB")
    } catch (error) {
        console.log("MongoDb error:  "+error) 
    }
}

export default main;