// import
import mongoose from 'mongoose';

const connection = {};

const connectDb = async () => {
   try {
      if (connection.isConnected) {
         return;
      }

      const db = await mongoose.connect(
         `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ejmezk0.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
      );

      console.log('database connected');

      connection.isConnected = db.connections[0].readyState;
   } catch (error) {
      throw new Error(error.message);
   }
};

export default connectDb;
