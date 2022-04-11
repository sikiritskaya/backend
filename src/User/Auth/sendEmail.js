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
    from: 'sikiritskaya@gmail.com',
    to: 'sikiritskaya@mail.ru',
    subject: 'test',
    text: 'hello again'
}  

transporter.sendMail(mailOptions, (err,success)=>{
    if(err){
        console.log(err)
    }else{
        console.log('Success!)')
    }
})