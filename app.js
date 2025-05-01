const express = require('express');
const dotenv = require('dotenv');
const Cors=require('cors')
dotenv.config();
const app = express();
const ConnectDB = require('./database/connect')
const userRoute=require('./routes/users')
const HajjRoute=require('./routes/Hajj')
app.use(express.json()); 
app.use(Cors())
app.use('/api/v1/user',userRoute) 
app.use('/api/v1/hajj',HajjRoute) 
const PORT = process.env.PORT || 3000;

const Start = async () => {
    try {
      await ConnectDB(process.env.MONGO_URI)
      app.listen(PORT, () => {
        console.log(`🚀 Server is listening on port ${PORT}`);
      });
    } catch (err) {
      console.error('❌ Failed to start server:', err.message);
      process.exit(1); // exit with failure
    }
  };
Start();
