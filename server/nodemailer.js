const nodemailer = require('nodemailer');




let transporter = nodemailer.createTransport({
        host: 'smtp.mail.ru',
        port: 465,
        secure: true,
        auth: {
            user: 'neutrino.web.study@inbox.ru',
            pass: 'Neytrino12!'
        }
    });


const mailer = (message) =>{
    console.log('MailTrySend')
  transporter.sendMail(message, (err,info) =>{
    if(err){
      console.log(err)
    }
    console.log('email send: ' + JSON.stringify(info))
  }
)};


module.exports = mailer;
