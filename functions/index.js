const functions = require('firebase-functions');
const nodemailer= require("nodemailer")
const config = functions.config()
const admin = require("firebase-admin")
const cors = require('cors')({origin:true})
admin.initializeApp()

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//


const transporter = nodemailer.createTransport({
    service:"Gmail",
    auth:{
        user:config.user.email,
        pass:config.user.password
    }
});

let mailOptions = {
    from:'Arc Development',
    to: 'charles.yitong@gmail.com',
    subject:'testing',
    text:'test successful'
}

exports.sendMail = functions.https.onRequest((request, response) => {
    cors(request, response,()=>{
        transporter.sendMail(mailOptions,error =>{
            if(error){
                response.send(error)
            }else{
                response.send("Message sent successfully")
            }
        })
    })
    
});