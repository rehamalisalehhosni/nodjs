var con = require('./conn.js');


module.exports=edit_student=function (req,res,queryParam) {
	con.query('Select *  from course where course_id = '+queryParam.id,function(err,rows){
	  if(err) throw err;
       	 res.end(JSON.stringify(rows));
	  });
}
