import mongoose from "mongoose";

export const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URL, {
        dbName: "HOSPITAL_APP"
    }).then(() => {
        console.log("Connected to database");
    }).catch((error) => {
        console.log(`Failed to connect to database: ${error}`);
    });
};
