// requiring data file
var friendsFile = require("../data/friends");
// var newFriend = require("../public/index");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friendsFile.friends);
  });

// posting data to the api

  app.post("/api/friends", function(req, res) {

    var bestFriend = {
      name: "",
      pic: "",
      friendDifference: Infinity
    };

    //user data being stored in a var
    var newFriend = req.body;
    var newFriendTraits = newFriend.traits;

    // variation between user and potential best friends
    var totalDifference;

    // Loop possibilities currently stored
    for (var i = 0; i < friendsFile.friends.length; i++) {
      var currentFriend = friendsFile.friends[i];
      totalDifference = 0;

      console.log(currentFriend.name);

      // We then loop through all the scores of each friend
      for (var j = 0; j < currentFriend.traits.length; j++) {
        var currentFriendTraits = currentFriend.traits[j];
        var currentUserTraits = newFriendTraits[j];

        // We calculate the difference between the scores and sum them into the totalDifference
        totalDifference += Math.abs(parseInt(currentUserTraits) - parseInt(currentFriendTraits));
      }

      //logic used to determine whether new match is better than the last match.  if it is better, then the current friend replaces the existing "best friend"
      if (totalDifference <= bestFriend.friendDifference) {
        bestFriend.name = currentFriend.name;
        bestFriend.pic = currentFriend.pic;
        bestFriend.friendDifference = totalDifference;
      }
    }
    //dislay the best friend for error check.
    console.log("your best friend is: ", bestFriend);

    // save user's data to the database
    friendsFile.friends.push(newFriend);

    // return list of friends json to close the request
    res.json(bestFriend);
  });
};
