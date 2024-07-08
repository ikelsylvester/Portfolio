const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.use(express.static((path.join(__dirname, "public"))))

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,"public", "index.html"))

})
console.log(path.join(__dirname, "public"))
app.get('/about',(req,res)=>{
    res.sendFile(path.join(__dirname,"public", "about.html"))

})
console.log(path.join(__dirname, "public"))
app.get('/contact',(req,res)=>{
    res.sendFile(path.join(__dirname,"public", "contact.html"))

})
console.log(path.join(__dirname, "public"))


 
app.listen(port, () => {
    console.log(`HTTP Response! Status: Listening to port ${port}`)
})