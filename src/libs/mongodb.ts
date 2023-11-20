import mongoose from "mongoose";

const { MONGO_URI } = process.env;

if (!MONGO_URI) {
  throw new Error("MONGO DB NOT DEFINE");
}

export const connectBD = async () => {
  // aqui nos aseguramos de que nos alerte si nos conectamos satisfactoriamente a mongodb
  try {
    const { connection } = await mongoose.connect(MONGO_URI);
    if (connection.readyState === 1) {
      console.log("MongoDB Connect sucessfully");
      return Promise.resolve(true);
    }
  } catch (error) {
    console.error(error);
    return Promise.reject(false);
  }
};
