const express = require("express");
const bodyParser = require("express");

const app = express();

app.set('view engine', 'ejs');

app.get("/", (req, res) => {
  let today = new Date();

  var options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
     };


  let day = today.toLocaleDateString("en-US", options);

  //renders file called list, then looks for variable name kindOfDay and replaces it with value of day
  res.render('list',{kindOfDay: day})
});



app.listen(3000, () => {
  console.log("Server started on port 3000");
});
