import express from "express";
import cors from "cors";

const app = express();

const isProduction = process.env.NODE_ENV === "production";
const isDevelopment = process.env.NODE_ENV === "development";

if (isDevelopment) {
  app.use(cors());
}

if (isProduction) {
  app.use(express.static("public"));
}

app.get("/api/hello", (req, res) => {
  res.json({ message: "Worldfsdf" });
});

// 404 fallback for client side routing
if (isProduction) {
  app.get("*", (req, res) => {
    res.sendFile("index.html", { root: "public" });
  });
}

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
