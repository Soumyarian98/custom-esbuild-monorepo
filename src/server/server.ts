import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("public"));
}

app.get("/api/hello", (req, res) => {
  res.json({ message: "Worldfsdf" });
});

app.listen(9000, () => {
  console.log("Server started");
});
