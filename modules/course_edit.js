var con = require('./conn.js');
var qs = require('querystring');


module.exports=editcourse=function (req,res,data) {
          var post = qs.parse(data);
   	con.query("update course set title ='"+post.title+"',instructor_name='"+post.instructor_name+"' where course_id="+post.course_id,function(err,rows){
	  if(err) throw err;
       		res.writeHead(302, {'Location': 'http://localhost:8080/courses_list.html'});
         	 res.end();
	  });
}
