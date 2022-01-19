var express = require("express");
var bodyParser = require("body-parser");
var fs = require("fs");
var cors = require("cors");
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const saveData = (obj) => {
  return new Promise((resolve, reject) => {
    fs.readFile("./db.json", "utf8", (err, data) => {
      if (err) {
        console.log(`Error reading file from disk: ${err}`);
      } else {
        const databases = JSON.parse(data);
        if (databases) {
          databases.push(obj);
          fs.writeFileSync("./db.json", JSON.stringify(databases));
          resolve({
            status: 1,
            data: databases,
          });
        } else {
          databases = [];
          databases.push(obj);
          fs.writeFileSync("./db.json", JSON.stringify(databases));
          resolve({
            status: 1,
            data: databases,
          });
        }
      }
    });
  });
};

app.get("/", (req, res, next) => {
  res.json("Questionare API");
});

app.get("/questions", (req, res, next) => {
  fs.readFile("db.json", "utf8", (err, data) => {
    if (err) {
      console.log(`Error reading file from disk: ${err}`);
    } else {
      const databases = JSON.parse(data);
      res.json({
        msg: "success",
        data: databases,
      });
    }
  });
});

app.post("/save", async (req, res, next) => {
  await saveData(req.body).then((result) => {
    if (res.status == 0) {
      res.json({
        msg: "failed",
        data: [],
      });
    } else {
      res.json({
        msg: "success",
        data: result,
      });
    }
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
