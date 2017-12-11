var gulp = require('gulp') ;
var sass = require('gulp-sass') ;
var watch = require('gulp-watch') ;
var sourcemaps = require('gulp-sourcemaps') ;
var browserSync = require('browser-sync');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var combiner = require('stream-combiner2');
var htmlmin = require('gulp-htmlmin');
var reload = require('gulp-livereload');

gulp.task('watch', function () {
    reload.listen() ;
    gulp.watch('./src/sass/**.scss', ['sass'])    ;
    gulp.watch('./src/js/**.js', ['scripts']);
    gulp.watch('./src/html/**', ['minify']);
});

gulp.task( 'sass', function() {
    return gulp.src('./src/sass/**.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write('./public/maps'))
        .pipe(gulp.dest('./public/css'))
        .pipe(browserSync.stream())
	.pipe(reload());   
}) ;

gulp.task('minify', function() {
    return gulp.src('./src/html/*.html')    
	.pipe(htmlmin({ collapseWhitespace : true }))
	.pipe(gulp.dest('./public'))
    	.pipe(reload());   
} ) ;

gulp.task('scripts', function() {
    return gulp.src(['./src/js/lib/jquery-3.2.1.js', './src/js/lib/swiper.js',  './src/js/main.js' ])
        .pipe(concat('main.js'))
        .pipe(gulp.dest('./public/js'))
        .pipe(uglify())
        .pipe(rename('main.min.js'))
        .pipe(gulp.dest('./public/js'))
    	.pipe(reload());   
});

gulp.task('serve', function() {
    browserSync({
        proxy : 'http://swiper',
	open:   false 
    });
    gulp.watch("./src/**").on('change', browserSync.reload);    
});

gulp.task('default', ['sass', 'scripts','watch', 'serve']) ;
