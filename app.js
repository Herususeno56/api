const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const router = require("./routes/index");


app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("/api/identitas", router);
app.listen(PORT, () => {
  console.log(`server running at port: ${PORT}`);
});
