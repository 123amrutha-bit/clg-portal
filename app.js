const fs = require('fs');
const path = require('path');

const rootEnv = path.join(__dirname, '.env');
const serviceEnv = path.join(__dirname, 'services', '.env');
const envPath = fs.existsSync(rootEnv) ? rootEnv : serviceEnv;

require('dotenv').config({ path: envPath });

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
  } catch (error) {
    console.warn('Database startup check failed:', error.message);
  }

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
