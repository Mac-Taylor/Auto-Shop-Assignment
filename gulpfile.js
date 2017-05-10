let gulp = require('gulp');
let browser = require('gulp-browser');

gulp.task('default', ['js', 'html']);

gulp.task('html', function(){
    return gulp.src('index.html') // starting file for gulp task
    .pipe(gulp.dest('public'));
});

gulp.task('js', function() {
    return gulp.src('js/app.js');
    .pipe(browswer.browswerify());
    .pipe(gulp.dest('public'));
})