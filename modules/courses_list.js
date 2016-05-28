var con = require('./conn.js');


module.exports=courses_list=function (req,res) {
	con.query('SELECT * from course ',function(err,rows){
	  if(err) throw err;
       	 res.end(JSON.stringify(rows));
	  });
}
