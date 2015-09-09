var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    KarmaServer = require('karma').Server,
    fs = require('fs'),
    zip = require('gulp-zip'),
    htmlreplace = require('gulp-html-replace')
    rev = require('gulp-rev')
    del = require('del')
    minifyCss = require('gulp-minify-css')
    concat = require('gulp-concat');

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

gulp.task('clean', function(){
  return del([
    'build',
    'publish'
  ]);
});

gulp.task('build', ['clean', 'publishCSS', 'publishJS'], function(){
  var manifest = fs.readFileSync('publish/rev-manifest.json').toString();
  var publishedJS = 'js/' + JSON.parse(manifest)['bundle.js']
      publishedCSS = 'css/' + JSON.parse(manifest)['todo.css'];
  return gulp.src(['index.html', 'server.sh'])
      .pipe(htmlreplace({js: publishedJS, css: publishedCSS}))
      .pipe(gulp.dest('publish'))
});

gulp.task('publishCSS', function(){
  return gulp.src('src/css/**/*.css')
      .pipe(minifyCss())
      .pipe(concat('todo.css'))
      .pipe(rev())
      .pipe(gulp.dest('publish/css'))
      .pipe(rev.manifest('publish/rev-manifest.json', {base: 'publish', merge: true}))
      .pipe(gulp.dest('publish'));
});

gulp.task('publishJS', ['browserify'], function(){
  return gulp.src('build/js/bundle.js')
      .pipe(rev())
      .pipe(gulp.dest('publish/js'))
      .pipe(rev.manifest('publish/rev-manifest.json', {base: 'publish', merge: true}))
      .pipe(gulp.dest('publish'));
});

gulp.task('publish', ['js', 'test', 'clean', 'browserify', 'publishCSS', 'publishJS', 'build'], function(){
  var archiveName = 'demo-' + version() + '.zip';
  return gulp.src('publish/**/*')
      .pipe(zip(archiveName))
      .pipe(gulp.dest('.'));
});
