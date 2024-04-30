const express = require("express");
require("dotenv").config()
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/app", (req,res)=>{
  res.send("Food Court")
})

app.use("/app", require("./routers/foodRouters") );


app.listen(PORT, () => {
  console.log(`server running on  PORT ${PORT}`);
});
