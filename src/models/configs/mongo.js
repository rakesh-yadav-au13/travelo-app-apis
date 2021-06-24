import mongoose from "mongoose";

async function mongoInit() {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Mongo DB connect succesfully");
  } catch (error) {
    console.log(error.message);
  }
}

export default mongoInit;
