//require packages
var express = require("express");
var path = require("path");
// setup express.
var app = express();
var PORT = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//setup array of objects for the reservations.
var tables = [];

//setup array of objects for the waitlist.
var waitList = [];

//Starting route to send the index page.
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

//Second route for reservation friend result page.
app.get("/friend_result", function (req, res) {
    res.sendFile(path.join(__dirname, "friend_results.html"));
});

//route to display all tables
app.get("/api/friend_results", function(req, res) {
    return res.json(friend_results);
  });

  app.post("/api/friend_results", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newFriend = req.body;

    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  
    console.log(newFriend);
  
    friends.push(newFriend);
  
    res.json(newFriend);
  });


//Clears array.
// app.get("/api/clear", function(req,res){
//   tables = [];
//   waitList = [];
//   res.json('end')
// });

// Starts the server to begin listening
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});