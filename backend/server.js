const express = require("express");
require("dotenv").config()
const app = express();
const cors = require('cors')
const PORT = process.env.PORT || 3000;

app.use(cors())
app.get("/app", (req,res)=>{
  res.send("Food Court")
})
app.use("/app", require("./routers/foodRouters") );


app.listen(PORT, () => {
  console.log(`server running on  PORT ${PORT}`);
});
