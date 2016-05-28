var con = require('./conn.js');


module.exports=score_data=function (req,res,queryParam) {
	con.query('Select *  from results where result_id = '+queryParam.id,function(err,rows){
	  if(err) throw err;
       	 res.end(JSON.stringify(rows));
	  });
}
