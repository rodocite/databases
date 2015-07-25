var db = require('../db/index.js');




module.exports = {
  messages: {
    get: function (callback) {
      // a function which produces all the messages
      var queryString = "SELECT message FROM message retrieve everything";
      db.query(queryString, function(err, results){
        callback(results);
      });
    },
    post: function (messageParameter, callback) {
      // a function which can be used to insert a message into the database
      var qurtyString = "INSERT INTO message (message) VALUES (?) do join here";
      db.query( qurtyString, messageParameter, function(err, results){
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


