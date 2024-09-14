const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRouter = require("./routes/userRouter");
const errorHandler = require("./middlewares/errorHandlerMiddleware");
const categoryRouter = require("./routes/categoryRouter");
const transactionRouter = require("./routes/transactionRouter");
const app = express();

//!Connect to mongodb
// mongodb+srv://me210003075:E3Cr1Y2qtFEb5z7t@cluster0.cp7uj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
mongoose
  .connect('mongodb+srv://me210003075:E3Cr1Y2qtFEb5z7t@cluster0.cp7uj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log("DB Connected"))
  .catch((e) => console.log(e));

//! Cors config
const corsOptions = {
  origin: ["http://localhost:5173"],
};
app.use(cors(corsOptions));
//!Middlewares
app.use(express.json()); //?Pass incoming json data
//!Routes
app.use("/", userRouter);
app.use("/", categoryRouter);
app.use("/", transactionRouter);
//! Error
app.use(errorHandler);

//!Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () =>
  console.log(`Server is running on this port... ${PORT} `)
);