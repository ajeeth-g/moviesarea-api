import express from "express";

const app = express();
const PORT = 6969;

app.get("/", (req, res) => {
  res.json({ msg: "hello get" });
  console.log("");
});


app.listen(PORT, () => {
  console.log(`Port running http://localhost:${PORT}`);
});
