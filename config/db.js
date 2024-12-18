const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const connectDB = async () => {
  try {
      const DB = process.env.MONGO_ATLAS_URL;
      console.log('Connecting to:', DB); // Log the URI for debugging

      const conn = await mongoose.connect(DB);
      console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
      console.error(`Error: ${error.message}`);
      process.exit(1); // Exit with failure
  }
};

module.exports = connectDB;