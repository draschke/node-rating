require('./test-helper');

var mongoose = require('mongoose').Mongoose

exports.clean = function () {
    var db = mongoose.connect('mongodb://localhost/rating_test'),
        Hit = require('hit').Hit(db);

    Hit.remove({}, function () {});
}