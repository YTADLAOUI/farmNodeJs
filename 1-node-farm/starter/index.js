const fs =require('fs');
const http =require('http');
const url =require('url');
///////////////////////////////////////////////////////////////
// const input = fs.readFileSync('./txt/input.txt','utf-8');
// console.log(input);
// const inputOut=`avocta is : ${input} and time : ${Date.now} `
//  fs.writeFileSync('./txt/outPut.txt',inputOut);
//  fs.readFile('./txt/input.txt',"utf-8",(err,data)=>{
// if(err){
//   console.error("error")
//   return;
// }
// console.log(data);
// fs.writeFile('./txt/avocat.txt',data,err=>{if(err){console.error('error')}})
//  })

const card= fs.readFileSync(`${__dirname}/templates/template-card.html`,'utf-8');
const overview= fs.readFileSync(`${__dirname}/templates/template-overview.html`,'utf-8');
const product= fs.readFileSync(`${__dirname}/templates/template-product.html`,'utf-8');
const data= fs.readFileSync(`${__dirname}/dev-data/data.json`,'utf-8');
// const Jdata=JSON.parse(data)
 //////////////////////////////////////////////////////////////////////////
 const server = http.createServer((req,res)=>{
   const namePath = req.url
if(namePath==='/' || namePath == '/overview'){
  res.writeHead(200,{'content-Type': 'text/html'})
  res.end(overview)
}else if (namePath =='/pro') {
  res.end("Hello from server Product")
} else if(namePath===('/api')){
   res.writeHead(200,{'content-type':'application/json'})
res.end(data)
} else {
  res.writeHead(404,{
    'content-Type': 'text/html',
    'my-one-headar':'hello-word'
  })
  res.end('<h1>not found !</h1>')
}
  
 });
 server.listen('8000','127.0.0.1',()=>{
  console.log("listning to requests on port 8000")
 });