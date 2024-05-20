import express from 'express';
import { set, connect } from "mongoose";
import cors from "cors";
import router from './routes/index.js';
import dotenv from "dotenv";

dotenv.config();
var app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use(router);

try {
  const uri = process.env.DB_URI;
  set("strictQuery", false);
  const dbName = process.env.DB_NAME;
  connect(
    uri,
    {
      dbName,
    });
    console.log("Established connection to database");
} catch (error) {
    console.log(error.message);
}

// try {
//   const uri = process.env.DB_URI;
//   set("strictQuery", false);
//   const dbName = process.env.DB_NAME;
//   connect(uri, {
//     dbName,
//     useNewUrlParser: true, // Add this option to avoid deprecation warning
//     useUnifiedTopology: true // Add this option to avoid deprecation warning
//   });
//   const db = connection.connection;
//   db.on('error', console.error.bind(console, 'MongoDB connection error:')); // Add error handling for the database connection
//   db.once('open', () => {
//     console.log("Established connection to database");
//   });
// } catch (error) {
//   console.log(error.message);
// }

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

// export default app;