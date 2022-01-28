const http = require('http');
const https = require('https');
const path = require('path');
const mailer = require('./nodemailer');;
const querystring = require('querystring');


const fs = require('fs');
const url = require('url');
const colors = require('colors');

const PORT = 80;
const hostname = 'olkhovka.com';
var base = '/build';

const httpServer = http.createServer(function (req, res) {
  unifinedServer(req,res);
});





let unifinedServer = function (req,res) {

    if(req.url == '/' || req.url == '/index' || req.url == '/main' || req.url == '/aboutUs' || req.url == '/productions' || req.url == '/youPidr' || req.url == '/forClient' || req.url == '/contacts'){
        req.url = '/index.html'
    };
    if (req.url == '/manager' || req.url == '/Manager') {
        req.url = '/Manager.html'
    }

    let pathname = path.join(__dirname + base + req.url);


    var fileExt = path.extname(pathname);


        if (path.basename(pathname) === undefined) {
            res.writeHead(404);
            res.write('Страница не найдена 404\n');
            res.end();
        }else{
            let file = fs.createReadStream(pathname);

            switch(fileExt){
                case '.html':
                    res.setHeader('Content-type', 'text/html');
                    break;
                case '.css':
                    res.setHeader('Content-type', 'text/css');
                    break;
                case '.js':
                    res.setHeader('Content-type', 'text/javascript');
                    break;
                case '.map':
                    res.setHeader('Content-type', 'text/map');
                    break;
                case '.json':
                    res.setHeader('Content-type', 'text/json');
                    break;
            };

            res.statusCode = 200;

            file.on('open',function () {
                file.pipe(res);
            });

            file.on('error', function (err) {
              res.writeHead(404);
              res.write('<h1 style = "text-align:center">Page not found: code 404\n</h1>');
              res.end();
            });
        }
        if (req.method == 'POST') {
          let body = '';
          req.on('data', function(chunk){
            let form = decodeURI(chunk);
              body += chunk.toString();
              let params = querystring.decode(body);


            const message = {
                from: '<neutrino.web.study@inbox.ru>',
                to: 'ThePursuer@mail.ru',
                subject:'Work',
                text:'Новый заказ: ' + 'email- ' + params.email + '  name- ' + params.name + ' tel- ' + params.tel + ' text- ' + params.text
                };
                if (params.email || params.name != undefined) {
                    mailer(message);
                    console.log('email- ' + params.email + '  name- ' + params.name + ' tel- ' + params.tel + ' text- ' + params.text);

                }

        });
        }else{

        }

};

httpServer.listen(PORT);
console.log(`Server run on port ${PORT}`.green);

console.log(`Server run on port ${PORT}`.green);


   // if (!fileExt){
   //          pathname += '.html';
   //      }






// const http = require('http');
// const https = require('https');
// const path = require('path');
// const mailer = require('./nodemailer');;
// const querystring = require('querystring');
//
//
// const fs = require('fs');
// const url = require('url');
// const colors = require('colors');
//
// const PORT = 443;
// const HOSTNAME = 'localhost';
// var base = '/build';
//
// // const server = http.createServer(function (req, res) {
// //
// //
// // })
// // server.listen(PORT);
//
//
//
//
// let httpsOptions = {
//     'key' : fs.readFileSync('./https/key.pem'),
//     'cert': fs.readFileSync('./https/GoGetSSLRSADVCA.crt')
// };
// const httpServer = https.createServer(httpsOptions,function (req, res) {
//     unifinedServer(req,res)
// });
//
//
// httpServer.listen(PORT);
// console.log(`Server run on port ${PORT}`.green);
//
//
//
//
//
// let unifinedServer = function (req,res) {
//   if(req.url == '/' || req.url == '/index' || req.url == '/main' || req.url == '/aboutUs' || req.url == '/productions' || req.url == '/youPidr' || req.url == '/forClient' || req.url == '/contacts'){
//       req.url = '/index.html'
//   };
//   if (req.url == '/manager' || req.url == '/Manager') {
//       req.url = '/Manager.html'
//   }
//
//   let pathname = path.join(__dirname + base + req.url);
//
//
//   var fileExt = path.extname(pathname);
//
//
//       if (path.basename(pathname) === undefined) {
//           res.writeHead(404);
//           res.write('Страница не найдена 404\n');
//           res.end();
//       }else{
//           let file = fs.createReadStream(pathname);
//
//           switch(fileExt){
//               case '.html':
//                   res.setHeader('Content-type', 'text/html');
//                   break;
//               case '.css':
//                   res.setHeader('Content-type', 'text/css');
//                   break;
//               case '.js':
//                   res.setHeader('Content-type', 'text/javascript');
//                   break;
//               case '.map':
//                   res.setHeader('Content-type', 'text/map');
//                   break;
//               case '.json':
//                   res.setHeader('Content-type', 'text/json');
//                   break;
//           };
//
//           res.statusCode = 200;
//
//           file.on('open',function () {
//               file.pipe(res);
//           });
//
//           file.on('error', function (err) {
//             res.writeHead(404);
//             res.write('<h1 style = "text-align:center">Page not found: code 404\n</h1>');
//             res.end();
//           });
//
//
//
//       }
//       if (req.method == 'POST') {
//         let body = '';
//         req.on('data', function(chunk){
//           let form = decodeURI(chunk);
//             body += chunk.toString();
//             let params = querystring.decode(body);
//             console.log('email- ' + params.email + '  name- ' + params.pass);
//
//
//           const message = {
//               from: '<neutrino.web.study@inbox.ru>',
//               to: 'ThePursuer@mail.ru',
//               subject:'Work',
//               text:'Новый заказ: ' + 'email- ' + params.email + '  name- ' + params.pass
//               };
//           mailer(message);
//       });
//       }else{
//
//       }
// }
//    // if (!fileExt){
//    //          pathname += '.html';
//    //      }
