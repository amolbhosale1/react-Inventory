//const dotenv=require("dotenv");
const mongoose = require("mongoose");
//MongoDB Connected

//dotenv.config({path:'./confg.env'});

const DB = process.env.DATABASE;
mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => console.log(err.message));
