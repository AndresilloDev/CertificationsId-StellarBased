const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    console.log(process.env)
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`yu blutut divais is connected`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;