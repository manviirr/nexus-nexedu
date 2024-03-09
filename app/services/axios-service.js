import axios from "axios";

export const axiosMongoDBInstance = axios.create();

axiosMongoDBInstance.interceptors.request.use(config => {
    config.baseURL = process.env.DATA_API_URL;
    config.headers['api-key'] = process.env.MONGODB_API_KEY;
    
    if(config.data){
        config.data = {
            ...config.data,
            dataSource: "NexEdu",
            database: process.env.MONGODB_DATABASE
        }
    }

    return config;
});