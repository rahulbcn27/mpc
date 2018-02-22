'use strict';

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var freqSchema = new Schema({

	"ff": {
      "type": "number"
    },
    "vf": {
      "type": "number"
    },
    "slider_position": {
      "type": "number"
    },
    "date": {
      "type": "string"
    },
    "loudness": {
      "type": "number"
    }
});

mongoose.connect('mongodb://mongodb://localhost:27017/freqdb');
 console.log("mongoose connected");
 var freq = mongoose.model('freq', freqSchema);

 
module.exports  = freq;  	 
