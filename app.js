const express = require("express");
const bodyParser = require("express");

const app = express();

app.set('view engine', 'ejs');

app.get("/", (req, res) => {
  let today = new Date();
  const currentDay = today.getDay();
  let day = "";

  //checks if what day of the week it is
  switch (currentDay) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
    default:
    console.log("Error");

  }

  //rendering file called list, then looks for variable name and replaces it
  res.render('list', {
    kindOfDay: day
  })
});



app.listen(3000, () => {
  console.log("Server started on port 3000");
});
