var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');
var staticPage = require('./modules/static.js');
var handleRequest = function (req, res) {  //function for server 
    var requestUrl = url.parse(req.url).pathname;
    if (req.method == 'GET') {
        var queryParam = url.parse(req.url, true).query;
        if (requestUrl == '/students_list') {
            var students_list = require('./modules/students_list.js');
            students_list(req, res);
        } else if (requestUrl == '/delete_student') {
            var delete_student = require('./modules/students_delete.js');
            delete_student(req, res, queryParam);
        } else if (requestUrl == '/edit_student') {
            var edit_student = require('./modules/student_data.js');
            edit_student(req, res, queryParam);
        }else if(requestUrl=='/courses_list'){
            var courses_list = require('./modules/courses_list.js');
            courses_list(req, res);
        }else if (requestUrl == '/delete_course') {
            var delete_course = require('./modules/courses_delete.js');
            delete_course(req, res, queryParam);
        }else if(requestUrl =='/edit_course'){
            var edit_student = require('./modules/course_data.js');
            edit_student(req, res, queryParam);
        }else if(requestUrl=='/scors_list'){
            var scors_list = require('./modules/scors_list.js');
            scors_list(req, res);
        }else if(requestUrl=='/edit_score'){
            var edit_score = require('./modules/score_data.js');
            edit_score(req, res,queryParam);
        }else {
            var filePath = '.' + requestUrl;
            staticPage(req, res, filePath);
        }
    } else if (req.method == 'POST') {
        if (requestUrl == '/addstudent') {
            var requestBody = "";
            req.on("data", function (chunk) {
                requestBody += chunk;
                var addstudent = require('./modules/student_add.js');
                addstudent(req, res, requestBody);
            });
            req.on("end", function () {
                if (requestBody === "") {
                    res.writeHead(409, {
                        "Content-Type": "application/json"
                    });
                }
            });
        }else if(requestUrl == '/editstudent') {
            var requestBody = "";
            req.on("data", function (chunk) {
                requestBody += chunk;
                var editstudent = require('./modules/student_edit.js');
                editstudent(req, res, requestBody);
            });
            req.on("end", function () {
                if (requestBody === "") {
                    res.writeHead(409, {
                        "Content-Type": "application/json"
                    });
                }
            });
        }else if (requestUrl =='/addcourse'){
            var requestBody = "";
            req.on("data", function (chunk) {
                requestBody += chunk;
                var addstudent = require('./modules/course_add.js');
                addstudent(req, res, requestBody);
            });
            req.on("end", function () {
                if (requestBody === "") {
                    res.writeHead(409, {
                        "Content-Type": "application/json"
                    });
                }
            });
        }else if(requestUrl == '/editcourse'){
            var requestBody = "";
            req.on("data", function (chunk) {
                requestBody += chunk;
                var editcourse = require('./modules/course_edit.js');
                editcourse(req, res, requestBody);
            });
            req.on("end", function () {
                if (requestBody === "") {
                    res.writeHead(409, {
                        "Content-Type": "application/json"
                    });
                }
            });
        }else if(requestUrl=='/addscore'){

            var requestBody = "";
            req.on("data", function (chunk) {
                requestBody += chunk;
                var addscore = require('./modules/score_add.js');
                addscore(req, res, requestBody);
            });
            req.on("end", function () {
                if (requestBody === "") {
                    res.writeHead(409, {
                        "Content-Type": "application/json"
                    });
                }
            });
        }else if(requestUrl=='/editscore'){
            var requestBody = "";
            req.on("data", function (chunk) {
                requestBody += chunk;
                var editscore = require('./modules/score_edit.js');
                editscore(req, res, requestBody);
            });
            req.on("end", function () {
                if (requestBody === "") {
                    res.writeHead(409, {
                        "Content-Type": "application/json"
                    });
                }
            });
        } else {
            var filePath = '.' + requestUrl;
            staticPage(req, res, filePath);
        }
    }
}
var server = http.createServer(handleRequest);
server.listen(8080, 'localhost');