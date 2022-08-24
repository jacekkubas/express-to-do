const express = require("express");

const app = express();
app.use(express.json());

app.use("/todos", require("./routes/todos"));

app.listen(3000, () => {
  console.log("Now listening on port 3000");
})