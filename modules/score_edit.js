var con = require('./conn.js');
var qs = require('querystring');


module.exports=editcourse=function (req,res,data) {
          var post = qs.parse(data);
   	con.query("update results set student_id ='"+post.student+"',course_id='"+post.course+"',result ="+post.result+" where result_id="+post.result_id,function(err,rows){
	  if(err) throw err;
       		res.writeHead(302, {'Location': 'http://localhost:8080/scors_list.html'});
         	 res.end();
	  });
}
