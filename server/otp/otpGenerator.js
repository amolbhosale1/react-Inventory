var otpGenerator = require('otp-generator');
const otpGenerator = async (req, res,next) => {
    try {
        let otp=await otpGenerator.generate(6);
        console.log(otp);
        next();
    } catch (err) {
      res.status(401).send("Otp not genrated");
      console.log("Otp not genrated");
  
    }
  }
  
  module.exports = otpGenerator;
  
