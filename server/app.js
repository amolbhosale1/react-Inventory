const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cookieParser=require("cookie-parser");

dotenv.config({ path: "./config.env" });

// Import Database connection
require("./DB/conn");

// Convert Data into Json
app.use(express.json());
app.use(cookieParser());
// link routes
app.use(require("./routes/auth"));

const PORT = process.env.PORT;


// app.get("/about", middleWare, (req, res) => {
//   res.send("Hello World from About");
// });
app.get("/contact", (req, res) => {
  res.send("Hello World from Contact");
});
// app.get("/signin", (req, res) => {
//   res.send("Hello World from SignIn");
// });
// app.get("/signup", (req, res) => {
//   res.send("Hello World from SignUp");
// });

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
