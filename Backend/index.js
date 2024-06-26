// const express = require('express');
// const connectToMongo = require('./db');
// const cors = require('cors');

// connectToMongo();
// const app = express();
// const port = 5000;

// app.use(cors());
// app.use(express.json());

// // Available Routes
// app.use('/api/auth', require('./routes/auth'));
// app.use('/api/notes', require('./routes/notes'));

// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });

// const express = require('express');
// const connectToMongo = require('./db');
// const app = express();
// const PORT = process.env.PORT || 5000;

// // Connect to MongoDB
// connectToMongo();

// // Define routes and middleware here

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

// const mongoose = require('mongoose');
// const mongoURI = process.env.MONGO_URI;

// const connectToMongo = async () => {
//   try {
//     await mongoose.connect(mongoURI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       // Remove the deprecated options
//       // useCreateIndex: true,
//       // useFindAndModify: false,
//     });
//     console.log('Connected to MongoDB');
//   } catch (error) {
//     console.error('Error connecting to MongoDB:', error.message);
//     process.exit(1); // Exit the process with a failure code
//   }
// };

// module.exports = connectToMongo;

// const connectToMongo = require("./db");
// const express = require("express");

// var cors=require('cors')
// connectToMongo();
// const app = express();
// const port = 5000;
// app.use(cors());

// app.use(express.json())

// app.use('/api/auth',require('./routes/auth.js'))
// app.use('/api/notes',require('./routes/notes.js'))

// app.listen(port, () => {
//   console.log(`App running on port http://localhost:${port}`);
// });



// const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/myNoteBook', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// }).then(() => {
//   console.log('Connected to MongoDB');
// }).catch((error) => {
//   console.error('Error connecting to MongoDB:', error.message);
// });

// const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/myNoteBook')
//   .then(() => {
//     console.log('Connected to MongoDB');
//   })
//   .catch((error) => {
//     console.error('Error connecting to MongoDB:', error.message);
//   });

// const mongoose = require('mongoose');

// const connectToMongo = async () => {
//   try {
//     await mongoose.connect('mongodb://localhost:27017/myNoteBook', {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log('Connected to MongoDB');
//   } catch (error) {
//     console.error('Error connecting to MongoDB:', error.message);
//     process.exit(1); // Exit process with failure
//   }
// };

// module.exports = connectToMongo;

// const express = require('express');
// const connectToMongo = require('./db');
// var cors=require('cors')
// connectToMongo()
// const app=express();
// const port=5000;
// app.use(cors());
// app.use(express.json())

// app.use('/api/auth',require('./routes/auth.js'))
// app.use('/api/notes',require('./routes/notes.js'))

// app.listen(port, () => {
//   console.log(`App running on port http://localhost:${port}`);
// });

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
// mongoose.connect(mongoURI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// }).then(() => {
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

// require('dotenv').config();
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');

// const app = express();
// app.use(cors());
// app.use(express.json());

// const PORT = process.env.PORT || 5000;
// const MONGO_URI = process.env.MONGO_URI;
// const JWT_SECRET = process.env.JWT_SECRET;

// mongoose.connect(MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
//   .then(() => console.log('Connected to MongoDB'))
//   .catch((error) => console.error('Error connecting to MongoDB:', error.message));

// app.listen(PORT, () => {
//   console.log(`App running on port http://localhost:${PORT}`);
// });

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;
const JWT_SECRET = process.env.JWT_SECRET;

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Error connecting to MongoDB:', error.message));

// Root URL handler
app.get('/', (req, res) => {
  res.send('Welcome to the backend server');
});

app.listen(PORT, () => {
  console.log(`App running on port http://localhost:${PORT}`);
});
