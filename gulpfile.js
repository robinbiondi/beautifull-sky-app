var gulp = require('gulp');
var http = require('http');
var st   = require('st');

gulp.task('default', function() {
	http.createServer(st({
    path : __dirname + '/beautifull-sky/www',
    index: 'index.html',
    cache: false,
  })).listen(8000);  
});