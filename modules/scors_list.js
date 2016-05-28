var con = require('./conn.js');


module.exports=scors_list=function (req,res) {
	con.query('SELECT * from results,students,course where  results.student_id=students.student_id and results.course_id=course.course_id  ',function(err,rows){
	  if(err) throw err;
       	 res.end(JSON.stringify(rows));
	  });
}
