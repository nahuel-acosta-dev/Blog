import mongoose, {ConnectOptions} from "mongoose";

(async () =>{
  try{
    const db = await mongoose.connect('mongodb://127.0.0.1/node-blog-database');
    console.log('database is connected to:', db.connection.name);
  }
  catch(error){
    console.error(error);
  }
    
})();
