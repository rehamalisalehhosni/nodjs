var con = require('./conn.js');
module.exports=delete_student=function (req,res,queryParam) {
	con.query('delete from students  where student_id = '+queryParam.id,function(err,rows){
	  if(err) throw err;
		  console.log('Data received from Db:\n');
		 // console.log(rows);
       		res.writeHead(302, {'Location': 'http://localhost:8080/'});
         	 res.end();
	  });
}
