var con = require('./conn.js');
var qs = require('querystring');


module.exports=addstudent=function (req,res,data) {
          var post = qs.parse(data);
   	con.query("insert into  course (title,instructor_name) values('"+post.title+"','"+post.instructor_name+"')",function(err,rows){
	  if(err) throw err;
       		res.writeHead(302, {'Location': 'http://localhost:8080/courses_list.html'});
         	 res.end();
	  });
}
