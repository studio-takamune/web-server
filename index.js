const express = require("express");
const path = require("path");
const app = express();

// console.log(__dirname);
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// app.get('/', function (req, res) {
//   console.log(req);
//   res.send('<h1>トップページ</h1>');
// })
// app.post("/api/vi/quiz", function (req, res) {
//   const answer = req.body.answer;
//   res.send(answer);
// });

app.post("/api/vi/quiz", function (req, res) {
  const answer = req.body.answer;
  if (answer === "2") {
    // res.send("<h1>正解！</h1>");
    res.redirect("/correct.html");
  } else {
    // res.send("<h1>不正解...</h1>")
    res.redirect("/wrong.html");
  }

  res.send(answer);
});

app.get("/api/vi/users", function (req, res) {
  res.send({
    name: "Mike",
    age: 30,
  });
});

app.listen(3098);

console.log("server running");
