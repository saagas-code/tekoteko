import dotenv from "dotenv";

dotenv.config();

const config = {
    APP_URL: process.env.APP_URL!,
    STORAGE_TYPE: process.env.STORAGE_TYPE!,
    MONGO_URL: process.env.MONGO_URL!,
    BUCKET_NAME: process.env.BUCKET_NAME!,
    AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
    AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
    AWS_DEFAULT_REGION: process.env.AWS_DEFAULT_REGION
};

export default config;
