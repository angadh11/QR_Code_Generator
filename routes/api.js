const express = require('express');
const router =express.Router();
const bodyParser= require('body-parser');
const fs=require('fs');
var qr=require('qr-image');
const particlesJS=require('particle.js')
var url;



router.get('/index',function(req,res){
	
        //window.onload=function(){
		res.sendFile (__dirname+'/index.html');
		
		

	//};

		
		
});
	

router.post('/form',function(req,res){
	var user=req.body.Name+" "+req.body.lname

    var code=qr.image(user,{type:'png'});
	res.type('png');
	code.pipe(res);

});

module.exports=router;