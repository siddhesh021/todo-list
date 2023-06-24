import mongoose from "mongoose";


export default function connection() {
    const URI = 'mongodb+srv://siddhesh021:siddhesh021@todolist.x5q5bnf.mongodb.net/'
    mongoose.connect(URI, {useNewUrlParser:true});
    mongoose.connection.on('connected', ()=>{console.log('Success');});
    mongoose.connection.on('disconnected', ()=>{console.log('Disconnected');});
    mongoose.connection.on('error', ()=>{console.log('error while connecting', error.message);});
}