const http = require('http');
const mailer = require('./nodemailer');;


const colors = require('colors');

const PORT = 3001;

http.createServer(async function (req, res) {
    let params;
    if(req.url == '/api/mailer/'){
            let body = '';
             req.on('data', (chunk)=>{
                body += chunk.toString();
            })
            req.on('end', ()=>{
                console.log(body);
                params = JSON.parse(body);
                const message = {
                    from: '<neutrino.web.study@inbox.ru>',
                    to: 'neutrino.web.study@inbox.ru',
                    subject:'Work',
                    text:'Новый заказ: ' + 'email- ' + params.email + '  Имя - ' + params.name + ' Номер- ' + params.number + ' Комметнарий- ' + params.comment
                };
                mailer(message);
                res.end('ok');
            })
    };
}).listen(PORT);

console.log(`Server run on port ${PORT}`.green);


   // if (!fileExt){
   //          pathname += '.html';
   //      }
