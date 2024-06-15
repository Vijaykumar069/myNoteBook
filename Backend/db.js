const mongoose= require('mongoose');
mongoose.set("strictQuery", false);
const mongoURI="mongodb://localhost:27017/mynotebook?readPreference=primaryPreferred&directConnection=true&ssl=false"

const connectToMongo =()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("hello connected to mongo successfully !!!")

    })
}
module.exports=connectToMongo