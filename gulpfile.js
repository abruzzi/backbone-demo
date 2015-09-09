var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    KarmaServer = require('karma').Server,
    fs = require('fs'),
    zip = require('gulp-zip');

gulp.task('test', function(done){
  new KarmaServer({
    configFile: __dirname + '/karma.conf.js'
  }, done).start();
});

gulp.task('js', function() {
    return gulp.src(['src/*.js', 'spec/*.js'])
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('browserify', function() {
    return browserify('src/js/app.js')
        .bundle()
        .on('error', function(err){
          console.log(err.message);
          this.emit('end');
        })
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('build/js'));
});

gulp.task('default', ['js', 'test']);

gulp.task('watch', function() {
  gulp.watch('src/js/**/*', ['browserify']);
});

function version() {
  return JSON.parse(fs.readFileSync('./package.json').toString()).version;
}

gulp.task('publish', ['js', 'test', 'browserify' ], function(){
  var archiveName = 'demo-' + version() + '.zip';

  return gulp.src(['build/**/*', 'index.html', 'server.sh'], {base: '.'})
          .pipe(zip(archiveName))
          .pipe(gulp.dest('.'));
});
