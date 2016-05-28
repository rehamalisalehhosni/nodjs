var con = require('./conn.js');


module.exports=students_list=function (req,res) {
	con.query('SELECT * from students',function(err,rows){
	  if(err) throw err;
		  console.log('Data received from Db:\n');
		 // console.log(rows);
       	 res.end(JSON.stringify(rows));
	  });
}
