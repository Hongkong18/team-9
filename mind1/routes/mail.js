var express = require('express');
var router = express.Router();

const send = require('./send');



router.post('/',function(req,res){
  console.log(req.body.emailId);
  send("",req.body.emailId,"", function(isLinkSent, reason){
  //   standardResponse.success = isLinkSent;
  // standardResponse.reason = isLinkSent;
    return res.send({isLinkSent,reason});
  });

});



module.exports = router;
