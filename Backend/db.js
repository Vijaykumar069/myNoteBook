// const mongoose = require('mongoose');
// mongoose.set("strictQuery", false);

// const mongoURI = "mongodb://localhost:27017/mynotebook?readPreference=primaryPreferred&directConnection=true&ssl=false";

// const connectToMongo = () => {
//     mongoose.connect(mongoURI, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//     }, () => {
//         console.log("Hello connected to mongo successfully !!!");
//     }).catch(err => {
//         console.error('Hello, MongoDB connection error:', err);
//     });
// };

// module.exports = connectToMongo;
// import { connect } from 'mongoose';

// const connectToMongo = async () => {
//   try {
//     await connect('mongodb://localhost:27017/myNoteBook?readPreference=primaryPreferred&directConnection=true&ssl=false', {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       useCreateIndex: true,
//       useFindAndModify: false,
//     });
//     console.log('Connected to MongoDB');
//   } catch (error) {
//     console.error('Error connecting to MongoDB:', error.message);
//     process.exit(1); // Exit process with failure
//   }
// };

// export default connectToMongo;

// const mongoose= require('mongoose');
// mongoose.set("strictQuery", false);
// const mongoURI="mongodb://localhost:27017/myNoteBook?readPreference=primaryPreferred&directConnection=true&ssl=false"

// const connectToMongo =()=>{
//     mongoose.connect(mongoURI,()=>{
//         console.log("hello connected to mongo successfully !!!")

//     })
// }
// module.exports=connectToMongo;

// const mongoose= require('mongoose');
// require('dotenv').config();
// mongoose.set("strictQuery", false);
// const mongoURI=process.env.DB_CONN
// const connectToMongo =()=>{
//     mongoose.connect(mongoURI,()=>{
//         console.log("hello connected to mongo successfully !!!")

//     })
// }
// module.exports=connectToMongo;

// const mongoose = require('mongoose');
// require('dotenv').config();

// // Set mongoose options (optional, adjust as needed)
// mongoose.set('useNewUrlParser', true);
// mongoose.set('useUnifiedTopology', true);
// mongoose.set('useCreateIndex', true);
// mongoose.set('useFindAndModify', false);

// const mongoURI = process.env.DB_CONN;
// mongoose.set("strictQuery", false);
// const connectToMongo = async () => {
//     try {
//         await mongoose.connect(mongoURI);
//         console.log("Connected to MongoDB");
//     } catch (error) {
//         console.error("Error connecting to MongoDB:", error.message);
//         process.exit(1); // Exit the process with an error
//     }
// };

// module.exports = connectToMongo;

// const mongoose = require('mongoose');
// require('dotenv').config();

// mongoose.set("strictQuery", false);
// const mongoURI = process.env.MONGO_URI;

// const connectToMongo = async () => {
//     try {
//         await mongoose.connect(mongoURI);
//         console.log("Connected to MongoDB successfully!");
//     } catch (error) {
//         console.error("Error connecting to MongoDB:", error.message);
//         process.exit(1); // Exit the process with an error
//     }
// };

// module.exports = connectToMongo;

// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// require('dotenv').config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(express.json());

// // MongoDB Connection
// const mongoURI = process.env.MONGO_URI;
// mongoose.connect(mongoURI).then(() => {
//   console.log('Connected to MongoDB');
// }).catch((error) => {
//   console.error('Error connecting to MongoDB:', error.message);
// });

// // Routes
// app.post('/api/auth/createuser', async (req, res) => {
//   // Your existing code to handle the request
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`App running on port http://localhost:${PORT}`);
// });


const mongoose= require('mongoose');
require('dotenv').config();
mongoose.set("strictQuery", false);
const mongoURI=process.env.DB_CONN

const connectToMongo =()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("Hello connected to mongo successfully !!!")

    })
}
module.exports=connectToMongo