var models = require('../models');
var bluebird = require('bluebird');



module.exports = {
  messages: {
    get: function (req, res) {
      // a function which handles a get request for all messages
      console.log(req);
      models.messages.get(function(err, result){
        res.status(200).json(result).end();
      });
    },
    post: function (req, res) {
      // a function which handles posting a message to the database
      // turn message into array before passing
      console.log(req.body)
      var messageParameters = [[objectId], [message], [room]];
      models.messages.post(messageParameters, function(req, res){
        res.json(req);
      });
    }
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

