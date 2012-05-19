/* basic collection++josn example */

var http = require('http');
var fs = require('fs');
var url = require('url');

// shared data block
// simple in-memory storage for this demo
var data = {};
data.collection={};
data.collection.version='1.0';
data.collection.href='/data';
data.collection.links = [];
data.collection.items = [];
data.collection.items[0] = {href : '/data/?id=0', data : [{name:'title', value:'go fishing'}]};
data.collection.items[1] = {href : '/data/?id=1', data : [{name:'title', value:'go camping'}]};
data.collection.items[2] = {href : '/data/?id=2', data : [{name:'title', value:'go crazy'}]};
data.collection.queries = [];
data.collection.template = {};
data.collection.template.data = [{name:'title',prompt:'Title',value:''}];

function handler(req, res) {

  var href, id, path, full;

  href = url.parse(req.url,true);
  path = href.pathname;
  id = href.query['id'];
  full = req.url;

  //handle single record requet
  if(id) {
    if(req.method==='GET') {
      sendDataItem(id, res);
    }
    else {
      sendResponse(res,{status:405, msg:'Method not allowed'});
    }
    return;
  }

  // handle general requests
  switch(full) {
    case '/':
      if(req.method==='GET') {
        sendHtml(res);
      }
      else {
        sendResponse(res,{status:405, msg:'Method not allowed'});
      }
      break;
    case '/cj.js':
      if(req.method==='GET') {
        sendJS(res);
      }
      else {
        sendResponse(res,{status:405, msg:'Method not allowed'});
      }
      break;
    case '/cj.css':
      if(req.method==='GET') {
        sendCSS(res);
      }
      else {
        sendResponse(res,{status:405, msg:'Method not allowed'});
      }
      break;
    case '/data':
      switch(req.method) {
        case 'GET':
          sendData(res);
          break;
        case 'POST':
          addData(req,res);
          break;
        default:
          sendResponse(res,{status:405, msg:'Method not allowed'});
          break;
        }
      break;
    default:
      sendResponse(res,{status:404, msg:'Not found',body:'Not found'});
      break;
  }
}

function addData(req, res) {
  var i;
  i = data.collection.items.length;
  data.collection.items[i] = {href:'/data/?id='+i, data:[{name:'title', value:'xxx'}]};
  sendData(res);
}
function sendDataItem(id, res) {
  var i,x,temp;
  temp = data.clone();
  temp.collection.items = [];
  for(i=0,x=data.collection.items.length;i<x;i++) {
    if(i==id) {
      temp.collection.items[0] = data.collection.items[i];
      break;
    }
  }
  sendResponse(res, {status:200,body:JSON.stringify(temp), contentType:'application/collection+json'});
}
function sendData(res) {
  sendResponse(res, {status:200,body:JSON.stringify(data),contentType:'application/collection+json'});
}

function sendHtml(res) {
  fs.readFile('./basic/home.html','ascii',function(err,file){sendFile(err,file,res,'text/html');});
}
function sendJS(res) {
  fs.readFile('./basic/cj.js','ascii',function(err,file){sendFile(err,file,res,'text/javascript');});
}
function sendCSS(res) {
  fs.readFile('./basic/cj.css','ascii',function(err,file){sendFile(err,file,res,'text/css');});
}
function sendFile(err, file, res, ctype) {
  if(err) {
    sendResponse(res, {status:500,msg:err.message,body:err.message});
  }
  else {
    sendResponse(res,{status:200,body:file,contentType:ctype});
  }
}

function sendResponse(res, dt) {
  var d = dt||{};
  res.writeHead(d.status||200,d.msg||'OK',{'Content-Type':d.contentType||'text/plain'});
  res.end(d.body||'');
}

// clone object
Object.prototype.clone = function() {
  var i;
  var newObj = (this instanceof Array) ? [] : {};

  for (i in this) {
    if (i == 'clone') continue;
    if (this[i] && typeof this[i] == "object") {
      newObj[i] = this[i].clone();
    } else newObj[i] = this[i]
  } return newObj;
};

http.createServer(handler).listen(process.env.PORT||1337);