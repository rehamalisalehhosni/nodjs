var con = require('./conn.js');
var qs = require('querystring');


module.exports=addscore=function (req,res,data) {
      var post = qs.parse(data);
      console.log(post);
   	con.query("insert into  results (result,student_id,course_id) values('"+post.result+"','"+post.student+"','"+post.course+"')",function(err,rows){
	  if(err) throw err;
       		res.writeHead(302, {'Location': 'http://localhost:8080/scors_list.html'});
         	 res.end();
	  });
}
