import dotenv from 'dotenv';
dotenv.config();

console.log(process.env.NOMBRE)

export default {
    MONGO_DATABASE: process.env.MONGO_DATABASE || 'node-blog-database',
    MONGO_USER: process.env.MONGO_USER || 'admin',
    MONGO_PASSWORD: process.env.MONGO_PASSWORD || 'admin',
    MONGO_HOST: process.env.MONGO_HOST || '127.0.0.1',

    PORT: process.env.PORT || 8000

}