require('dotenv').config();

const express = require('express');
const db = require('./config/db');
const userRouter = require('./routers/user.router');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use('/api', userRouter);

app.get('/', (req, res) => {
  res.send('College Portal API is running');
});

async function startServer() {
  try {
    await db.connect();

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Server startup failed:', error.message);
    process.exitCode = 1;
  }
}

startServer();
