import mongoose from "mongoose";

const dbConnection  = ()=> {
    try {
        const params = {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
        mongoose.connect(process.env.MONGO_URL);
        console.log("MongoDB Connected Successfully");
    } catch (error) {
        console.log("Something went wrong on connecting with the Database");
    }
};

export default dbConnection;