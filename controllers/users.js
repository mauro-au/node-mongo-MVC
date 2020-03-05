var User  = require('../models/users');
var bcrypt   = require('bcryptjs');
exports.user_create = function(req, res, next) {
    if (req.body) {
        let items = req.body
        User.create(items, function(err, newUsers){
            if(err) return res.json({ error: err });
            return res.json(newUsers);
        });
    } else {
        return res.json({status: 'ERROR', message: 'Debe completar todos los campos'}); //opcional mandar un mensaje de error
    }
  }

exports.all_users = function(req, res, next) {
    User.find({}, function(err, users){
        if(err) return res.json({ error: err });
        res.json(users)
    });
}
