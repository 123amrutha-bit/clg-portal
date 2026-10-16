# College Portal API

## Run locally

1. Install dependencies:
   ```powershell
   npm install
   ```
2. Copy `.env.example` to `.env`:
   ```powershell
   Copy-Item .env.example .env
   ```
3. In `.env`, replace the `MONGO_URI` example with your MongoDB connection string and set `JWT_SECRET` to a long, private random value. Do not commit `.env`.
4. Start the API:
   ```powershell
   npm.cmd start
   ```

The API listens on port 5000 by default and starts only after it connects to MongoDB. For MongoDB Atlas, create a database user, allow your current IP in Network Access, and use the Node.js connection string from your cluster. If startup fails, check the printed error and verify the URI, database credentials, and IP access.
