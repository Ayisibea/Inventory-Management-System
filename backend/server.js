require("dotenv").config({})
const app = require("./src/app");
const { PUBLIC_DATA } = require("./src/constant");

app.listen(PUBLIC_DATA.port,()=>{
   console.log(`the app is listening at http://localhost:${PUBLIC_DATA.port}`) 
})