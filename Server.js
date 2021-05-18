const express=require("express");
const bodyParser=require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res)
{
  res.sendFile(__dirname+"/index.html");
});
app.post("/",function(req,res)
{
  var n1=req.body.Weight;
  var n2=req.body.Height;
  var result=((n1/(n2*n2))*10000).toFixed(2);
  if(result<18.5)
  {
    res.send("Your BMI is "+result+". You are underweight.");
  }
  else if (result<24.9)
  {
    res.send("Your BMI is "+result+". You are healthy.");
  }
  else if(result<30.0)
  {
    res.send("Your BMI is "+result+". You are overweight.");
  }
  else
  {
    res.send("Your BMI is "+result+". You are obese.");
  }
  console.log(req.body.num1);
});
app.listen(5000,function()
{
  console.log("server is started")
});
