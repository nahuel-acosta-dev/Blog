import mongoose, {ConnectOptions} from "mongoose";
import config from "./config";

(async () =>{
  try{
    const mongooseOptions: ConnectOptions ={
        //user: config.MONGO_USER,
        //pass: config.MONGO_PASSWORD
    }
    console.log(mongooseOptions)
    const db = await mongoose.connect(`mongodb://${config.MONGO_HOST}/${config.MONGO_DATABASE}`, mongooseOptions);
    console.log('database is connected to:', db.connection.name);
  }
  catch(error){
    console.error(error);
  }
    
})();
