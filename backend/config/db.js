import mongoose from "mongoose";

const mongoDB = async () => {
  try {
    await mongoose.connect(process.env.mongoDB);
    console.log("succcessfully connected to mongoDB");
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default mongoDB;
