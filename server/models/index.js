var db = require('../db/index.js');




module.exports = {
  messages: {
    get: function (callback) {
      // a function which produces all the messages
      var queryString = "SELECT message.objectID, message.message, room FROM message \
                         LEFT OUTER JOIN user \
                         ON message.id = user.id";
      db.query(queryString, function(err, results){
        callback(results);
      });
    },
    post: function (messageParameters, callback) {
      // a function which can be used to insert a message into the database
      var queryString = "INSERT INTO messages (objectID, message, room) VALUES (?, ?, ?)";
      db.query(queryString, messageParameters, function(err, results){
        callback(results);
      });
    }
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      var queryString = "SELECT username FROM user";
      db.query( queryString, function(err, results){
        callback(results);
      });
    },
    post: function (userNameParameter, callback) {
      var queryString = "INSERT INTO user (username) VALUES (?)";
      db.query( queryString, userNameParameter, function(err, results){
        callback(results);
      });
    }
  }
};


