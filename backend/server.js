const express = require("express");
require("dotenv").config()
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/app", (req,res)=>{
  res.send("Food Court")
})

app.get("/api", require("./routers/foodRouters") );

// app.get("/burger",);

// app.get("/pizza", );

// app.get("/desert", );

// app.get("/soup", )

// app.get("/beverages", )

// app.get("/app", (req, res) => {
//   res.send("hello");
// });

app.listen(PORT, () => {
  console.log(`server running on  PORT ${PORT}`);
});
