const express = require("express");
const bodyParser = require("body-parser");


const app = express();

let items = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/", (req, res) => {
  let today = new Date();

  var options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  };


  let day = today.toLocaleDateString("en-US", options);

  //renders file called list, then looks for variable name kindOfDay and replaces it with value of day
  res.render('list', {kindOfDay: day, newListItems: items})
});


//catches the post request of button click
app.post("/", (req, res) => {
  let item = req.body.newItem;
  items.push(item);
  res.redirect("/");
});


app.listen(3000, () => {
  console.log("Server started on port 3000");
});
