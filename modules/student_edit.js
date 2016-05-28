var con = require('./conn.js');
var qs = require('querystring');


module.exports=editstudent=function (req,res,data) {
          var post = qs.parse(data);
   	con.query("update students set st_name ='"+post.user+"',st_email='"+post.email+"' where student_id="+post.user_id,function(err,rows){
	  if(err) throw err;
       		res.writeHead(302, {'Location': 'http://localhost:8080/'});
         	 res.end();
	  });
}
