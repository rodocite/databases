var models = require('../models');
var bluebird = require('bluebird');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function(result){
        res.json(result);
      });


    },
    post: function (req, res) {
      var messageParameters = [req.body.username, req.body.text, req.body.roomname];
      models.users.post([req.body.username], function(){
        models.messages.post(messageParameters, function(){
          res.status(201).end();
        });
      });
      console.log("messageParameters", messageParameters);
    }
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      console.log('GET THE USER CONTROLLER');
      models.users.get(function(results) {
        res.json(results);
      });
    },
    post: function (req, res) {
      var userNameParameter = req.body.username;
      console.log("USER POST CONTROLLER: ", userNameParameter);
      models.users.post(userNameParameter, function() {
        res.send('success');
      });
    }
  }
};

