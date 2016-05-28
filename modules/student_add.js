var con = require('./conn.js');
var qs = require('querystring');


module.exports=addstudent=function (req,res,data) {
          var post = qs.parse(data);
   	con.query("insert into  students (st_name,st_email) values('"+post.user+"','"+post.email+"')",function(err,rows){
	  if(err) throw err;
       		res.writeHead(302, {'Location': 'http://localhost:8080/'});
         	 res.end();
	  });
}
