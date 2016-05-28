var con = require('./conn.js');
module.exports=delete_student=function (req,res,queryParam) {
	con.query('delete from course  where course_id = '+queryParam.id,function(err,rows){
	  if(err) throw err;
       		res.writeHead(302, {'Location': 'http://localhost:8080/courses_list.html'});
         	 res.end();
	  });
}
