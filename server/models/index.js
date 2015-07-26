var db = require('../db/index.js');
var bluebird = require('bluebird');

module.exports = {
  messages: {
    get: function (callback) {
      // a function which produces all the messages
      var queryString = "SELECT messages.userID, messages.message, messages.room FROM messages \
                         LEFT OUTER JOIN user ON user.id = messages.userID limit 1";
      db.query(queryString, function (error, results, fields) {
          if (error) throw error;
          console.log("left outer join", results);
          callback(results);
      });
    },
    post: function (messageParameters, callback) {
      var queryString = "INSERT INTO messages (userID, message, room) VALUES ((SELECT user.id FROM user WHERE user.username = ? limit 1), ?, ?)";
      db.query(queryString, messageParameters, function(error){
        if (error) {
          throw error;
        } else {
          callback();
        }
      });
    }
  },
  users: {
    // Ditto as above.
    get: function (callback) {

      var queryString = "SELECT * FROM user";
      db.query( queryString, function(err, results){
        callback(results);
      });
    },
    post: function (userNameParameter, callback) {
      var queryString = "INSERT INTO user (username) VALUES (?)";
      db.query(queryString, userNameParameter, function(error){
        if (error){
         throw error;
        } else {
          callback();
        }
      });
    }
  }
};


