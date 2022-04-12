//это было до, логику поместила в mailService


import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASS,
    },
    tls: {
        rejectUnauthorized:false
    }
  });

const mailOptions ={
    from: process.env.MY_EMAIL,
    to: email,
    subject: 'confirm your account',
    html: `
    <h1>hello ${username}</h1>
    <p>For virification please click on link <a href= http://localhost:8000//activate/${confirmationCode}></a></p>
    `
}  

transporter.sendMail(mailOptions, (err,success)=>{
    if(err){
        console.log(err)
    }else{
        console.log('Success!)')
    }
})