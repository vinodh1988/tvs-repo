var fs=require('fs');
var express=require('express');
var path=require("path");
var app=express();


/*fs.readFile("package.json","utf8",function(err,data){
    if(err)
      console.log("unable to read file")
    else
      console.log(data);

})*/

app.get("/hello",function(request,response){
  response.send("Hello!!! First node app");
})

app.get("/home",function(request,response){
  response.sendFile(path.join(__dirname,"public/view/index.html"));
})

app.listen("3050",function(){
  console.log("Server started and listening @ 3050");
})