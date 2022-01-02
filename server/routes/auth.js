const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authenticate = require("../middleware/authenticate");

require("../DB/conn");
const User = require("../model/userSchema");
const Table = require("../model/tableSchema");

router.get("/", (req, res) => {
  res.send("Hello World");
});

//Promises Method, Callback Hell
// router.post("/register",(req, res) => {
//   const { name, email, phone, work, password, cPassword } = req.body;
//   if (!name || !email || !phone || !work || !password || !cPassword) {
//     return res.status(422).json({ error: "Plz enter all fields" });
//   }
//   User.findOne({ email: email })
//     .then((userExist) => {
//       if (userExist) {
//         return res.status(422).json({ error: "Email already Exist" });
//       }
//       const user = new User({ name, email, phone, work, password, cPassword });

//       user
//         .save()
//         .then(() => {
//           res.status(201).json({ message: "Successfully Registered" });
//         })
//         .catch((err) => res.status(500).json({ error: "Failed Registration" }));
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

//Async, await Method
router.post("/register", async (req, res) => {
  const { name, email, phone, work, password, cPassword } = req.body;

  if (!name || !email || !phone || !work || !password || !cPassword) {
    return res.status(422).json({ error: "Enter all fields" });
  }
  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(422).json({ error: "Email already Exist" });
    } else if (password != cPassword) {
      return res.status(422).json({ error: "Password are not matching" });
    } else {
      const user = new User({ name, email, phone, work, password, cPassword });
      const userRegister = await user.save();
      if (userRegister) {
        res.status(201).json({ message: "Successfully Registered" });
      } else {
        res.status(500).json({ error: "Failed Registration" });
      }
    }
  } catch (err) {
    console.log(err);
  }
});

router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Enter all fields" });
    }
    const userLogin = await User.findOne({ email: email });
    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);

      let token = await userLogin.generateAuthToken();
      console.log("teken is " + token);

      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
      });

      if (!isMatch) {
        res.status(400).json({ error: "Invalid Credientials" });
      } else {
        res.json({ message: "Login Success" });
      }
    } else {
      res.status(400).json({ error: "Invalid Credientials" });
    }
  } catch (err) {
    console.log(err);
  }
});

router.get("/about", authenticate, (req, res) => {
  res.send(req.rootUser);
  // console.log(req.rootUser.name)

});

router.get("/getdata", authenticate, (req, res) => {
  res.send(req.rootUser);
});
//Table Data

router.post("/inventorytable", authenticate, async (req, res) => {
  const { cname, cphone, milk, liter, } = req.body;
  let names= req.rootUser.name; 
 console.log(names)
  if (!cname || !milk || !liter) {
    return res.status(422).json({ error: "Enter all fields" });
  }
  try {
    const table = new Table({ cname, cphone, milk, liter });
    const tableData = await table.save();
    const user = await User.findOne({ name: names })
    user.tables.push(tableData._id)
    const savedPost = await user.save()
    //console.log(savedPost)
    if (tableData) {
      res.status(201).json({ message: "Successfully Enter Data" });
    } else {
      res.status(500).json({ error: "Failed Data" });
    }

  } catch (err) { console.log(err); }
});




router.get("/inventorytablecow", authenticate, async (req, res) => {
  let names= req.rootUser.name; 
  try {
  await User.findOne({ name: names }).select("milk")
      .populate({ path: 'tables' })
      .exec(function (err, data) {
        if (err) {
          res.send(err);
        }
        else {
          let mm = data.tables.filter(milk => milk.milk === "cow")
          res.send(mm)
        }
      });
  } catch (err) { console.log(err); }
});




router.get("/inventorytableget", authenticate, async (req, res) => {
  let names= req.rootUser.name;
 //console.log(names)
  try {
    await User.findOne({ name: names }).select("milk")
      .populate({ path: 'tables' })
      .exec(function (err, data) {
        if (err) {
          res.send(err);
        }
        else {
          let mm = data.tables.filter(milk => milk.milk === "buffalo")
          res.send(mm)
        }
      });
  } catch (err) { console.log(err); }



  //   await Table.find({ milk: "buffalo" }, (err, data) => {
  //     if (err) {
  //       res.send(err);
  //     }
  //     else {
  //       res.send(data);
  //     }
  //  });
});

module.exports = router;
