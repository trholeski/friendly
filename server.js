// Dependencies/npm packages needed to run app.

var express = require("express");

// Express Config

// Create an "express" server
var app = express();

// Allows express to dictate port or use 3000
var PORT = process.env.PORT || 3000;

// middleware allowing us to more easily consume data.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Listener

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});


// //require packages
// var express = require("express");
// var path = require("path");
// // setup express.
// var app = express();

// var PORT = process.env.PORT || 3000;
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// //setup array of objects for the friends.
// var friends = [
//     {
//       routeName: "ross",
//       name: "Ross",
//       email:"ross@friends.com",
//       password: "dinosaurs",
//       scores:[1, 2, 3, 4, 2]
//     },
//     {
//       routeName: "chandler",
//       name: "Chandler",
//       email:"chandler@friends.com",
//       password: "humor",
//       scores:[1, 2, 3, 4, 2]
//     },
//     {
//     routeName: "joey",
//     name: "Joey",
//     email:"joey@friends.com",
//     password: "acting",
//     scores:[1, 2, 3, 3, 2]
//     }
//   ];

// //Starting route to send the index page.
// app.get("/", function (req, res) {
//     res.sendFile(path.join(__dirname, "app/public/index.html"));
// });

// //Second route for friend result page.
// app.get("/friend_result", function (req, res) {
//     res.sendFile(path.join(__dirname, "app/public/friend_result.html"));
// });

// //route to display all friends
// app.get("/api/friend_list", function(req, res) {
//     return res.json(friends);
//   });

//   app.post("/api/friend_list", function(req, res) {
//     // req.body hosts is equal to the JSON post sent from the user
//     // This works because of our body parsing middleware
//     var newFriend = req.body;

//     // Using a RegEx Pattern to remove spaces from newCharacter
//     // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
//     newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();

//     console.log(newFriend);
  
//     friends.push(newFriend);
  
//     res.json(newFriend);
//   });


// //Clears array.
// // app.get("/api/clear", function(req,res){
// //   tables = [];
// //   waitList = [];
// //   res.json('end')
// // });

// // Starts the server to begin listening
// app.listen(PORT, function () {
//     console.log("App listening on PORT " + PORT);
// });