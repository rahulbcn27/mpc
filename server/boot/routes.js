module.exports = function(app) {
  
  var freq = app.models.freq;
  
  var bodyParser = require('body-parser');  
  var passport  = require('passport');
//var randomToken = require('random-token');
//  var crypto = require("crypto");
  
  var mongoose = require('mongoose');
//  var hash = require("password-hash");
 // var crypto = require("crypto");
//  var mongoose = require("mongoose");
//  mongoose.Promise = require('bluebird');



  app.use(bodyParser.json()); // for parsing application/json
  app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
  app.use(passport.initialize());


  
  app.post('/value', function(req, res) {


      var newFreq = new freq({

        "ff": req.body.ff ,
        "vf": req.body.vf,
       "slider_position": req.body.slider_position ,
       "date": req.body.date,
        "loudness": req.body.loudness    	

    }); 
      
    // save the freq
    newFreq.save(function(err, createdFreqObject) {
      if (err) {
        console.log("err in signup", err);
        if(err.code == 11000)
          return res.send("duplicate key error")
        else
        return res.send(err);
      } 
     
     res.json({success: true, msg: 'user is being registered',status : "1"});

   }); 
    
    
  });

}  
