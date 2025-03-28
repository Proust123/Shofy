const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const userRouter = require('./routes/user.routes');
const prodRouter = require('./routes/product.routes')
const categoryRouter = require('./routes/category.routes')

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api', userRouter);
app.use('/api', prodRouter)
app.use('/api', categoryRouter)

dotenv.config({ path: './.env' });

mongoose.connect(process.env.MONGODB_URL).then(() => {
  console.log('MongoDB connected');

  app.listen(process.env.PORT, () => {
    console.log('Server is running');
  });
});
