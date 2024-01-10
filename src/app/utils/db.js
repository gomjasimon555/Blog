import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://simontamang2002:Youtube2058$$@cluster0.lp6268e.mongodb.net/test?retryWrites=true&w=majority",
      {}
    );
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Connection to MongoDB failed");

    throw new Error("Connection failed!");
  }
};

export default connect;
