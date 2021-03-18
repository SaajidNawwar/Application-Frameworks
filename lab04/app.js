// //01
// console.log('Hello World');
// console.log('something went wrong');
// console.log('======================');
//
// //02
// const os = require('os');
//
// console.log('Architecture ' + os.arch());
// console.log('CPUs ' + os.cpus().length);
// console.log('OS ' + os.platform());
// console.log('======================');
//
// //03
// const fs = require('fs');
//
// const fileName = __dirname + '/test.txt';
//
// fs.readFile(fileName, (err, data) => {
//     if (err) {
//         console.error(err);
//     }
//     console.log(data.toString());
//     console.log('======================');
// });

// //04
//
// const fs = require('fs');
//
// const readStream = fs.createReadStream('test.txt');
// const writeStream = fs.createWriteStream('test-copy.txt');
//
// readStream.addListener('end',()=>{
//     console.log('end of file read');
// });
//
// writeStream.addListener('close',()=>{
//     console.log('end of file write');
//     console.log(fs.readFileSync('test-copy.txt','utf-8'));
// });
//
// readStream.pipe(writeStream);

//05

// const http = require('http');
//
// http.createServer((req, res) => {
//     res.setHeader('Content-Type', 'text/html');
//     res.write('<h1>Hello World</h1>');
//     res.end();
// }).listen(3000);

const http = require('http');
http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    switch (req.method) {
        case 'GET':
            res.write('<h1>Hello World</h1>');
            res.end(); break; case 'POST': req.on('data', data => {
                res.write('<h1>Hello ' + data + '</h1>');
                res.end(); }); break;
    }
}).listen(3000, (err) => {
    console.log('Server is listening to port 3000')
});