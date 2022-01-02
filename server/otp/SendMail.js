const nodemailer = require("nodemailer");
const {google} =require("googleapi");

const CLIENT_ID="";
const CLIENT_SECRET="";
const REDIRECT_URI="";
const REFRESH_TOKEN="";

const oAuth2Client= new google.auth.oAuth2(CLIENT_ID,CLIENT_SECRET,REDIRECT_URI)
oAuth2Client.setCredentials({refresh_token:REFRESH_TOKEN})

async function sendMail(){
    try{
        const acessToken =await oAuth2Client.getAccessToken()
        const transport=nodemailer.createTransport({
            service:'gmail',
            auth:{
                type:'OAuth2',
                user:"",
               clientId: CLIENT_ID,
               clientSecret:CLIENT_SECRET,
               refreshToken:REFRESH_TOKEN,
               acessToken:acessToken
            }
        })

        const mailOptions={
            from:'Amol<nsk@gmail.com>',
            to:'',
            subject:'from Amol Your Otp',
            text:"hello otp is",
        };

        const result = await transport.sendMail(mailOptions)
        return result

    }catch(err){ res.status(401).send("Mail not genrated");
    console.log("Mail not genrated");}
}

sendMail().then(res=>console.log("email snd",res))

  
module.exports = sendMail;