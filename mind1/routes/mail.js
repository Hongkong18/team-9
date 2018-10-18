var express = require('express');
var router = express.Router();

const send = require('./send');



router.post('/',function(req,res){
  console.log(req.body);
  console.log("jijjijiijj");
  let link="";
  let message = {
    subject : req.body.subject,
    html: req.body.content,
    // html : "Hello,<br> Please Click on the link to confirm you attendance.<br><a href=" + link + ">Click here to verify</a>",
    text: req.body.content
  };
  console.log("sending");
  send("",req.body.email,message, function(isLinkSent, reason){
  //   standardResponse.success = isLinkSent;
  // standardResponse.reason = isLinkSent;
    return res.send({isLinkSent,reason});
  });

});



module.exports = router;
