
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const express = require("express");
// set up express

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;



// set up mongoose

mongoose.connect(
  "mongodb://localhost:27017/UserDB",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  (err) => {
    if (err) throw err;
    console.log("MongoDB connection established");
  }
);
// set up routes
app.use("/users", require("./routes/users"));
app.use('/data', require("./routes/data"));
app.listen(PORT, () => console.log(`The server has started on port: ${PORT}`));


