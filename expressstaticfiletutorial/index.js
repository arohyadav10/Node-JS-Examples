var express= require("express"); 
var  join  =require('path').join;
const app = express() 

var PORT = process.env.port || 3000 

// View Engine Setup 
app.set("views", join(__dirname))
app.use(express.static('public'));   
app.set("view engine", "ejs") 

app.get("/mysubmit", function(req, res){ 

	var name = req.query.name 
	var age = req.query.age 
	
	console.log("Name :", name) 
	console.log("Age :", age) 
	res.send("welcome " +name+" and your age is"+age )
}) 

app.listen(PORT, function(error){ 
	if(error) throw error 
	console.log("Server created Successfully on PORT", PORT) 
}) 
