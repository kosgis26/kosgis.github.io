const gulp = require('gulp');
const del = require('del');
const imagemin = require('gulp-imagemin');
const concatCss = require('gulp-concat-css');
const uglifyCss = require('gulp-uglifycss');
const uglifyJs = require('gulp-uglifyjs');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const watch = require('gulp-watch');
const clean = require('gulp-clean');

gulp.task('html:build', function() {
	gulp.src('src/*.html')
		.pipe(gulp.dest('build/'));
});

gulp.task('image:build', function() {
    gulp.src('src/img/**/*.*')
        .pipe(imagemin())
        .pipe(gulp.dest('build/img'));
});

gulp.task('fonts:build', function() {
	gulp.src('src/fonts/*.*')
		.pipe(gulp.dest('build/fonts'));
});

gulp.task('PIE:build', function() {
    gulp.src('src/PIE/*.*')
        .pipe(gulp.dest('build/PIE'));
});

// gulp.task('sass', () =>
// 	return gulp.src('style/css/*.scss')
// 		.pipe(sass().on('error', sass.logError))
// 		.pipe(gulp.dest('styles/css'))
// );

gulp.task('style', function() {
	return gulp.src(['src/style/partials/style__mobile.css',
					 'src/style/partials/style__tablet.css',
					 'src/style/partials/style__desktop.css',
					 'src/style/partials/slider.css'])
	    .pipe(concatCss('style.css'))
	    .pipe(gulp.dest('src/style'));
});

gulp.task('autoprefix', ['style'], function() {
	return gulp.src('src/style/style.css')
		.pipe(autoprefixer({
			browsers: ['> 0%'],
			cascade: false
		}))
		.pipe(concat('style.main.css'))
		.pipe(gulp.dest('src/style'));
});

gulp.task('min__css', ['autoprefix'], function() {
	return gulp.src('src/style/style.main.css')
	    .pipe(uglifyCss({
	      "maxLineLen": 80,
	      "uglyComments": true
	    }))
	    .pipe(concat('style.main.min.css'))
	    .pipe(gulp.dest('build/style'));
});

gulp.task('scripts', function() {
	return gulp.src('src/js/script.js')
	    .pipe(concat('script.main.js'))
	    .pipe(gulp.dest('src/js'));
});

gulp.task('min__scripts',['scripts'] , function() {
	return gulp.src('src/js/script.main.js')
	    .pipe(uglifyJs('script.main.min.js'))
	    .pipe(gulp.dest('build/js'));
});

gulp.task('plagins', function() {
	return gulp.src('src/js/partials/*.js')
	    .pipe(concat('plagins.js'))
		.pipe(gulp.dest('src/js'));
});

gulp.task('min__plagins',['plagins'] , function() {
	return gulp.src('src/js/plagins.js')
    	.pipe(uglifyJs('plagins.min.js'))
    	.pipe(gulp.dest('build/js'));
});


gulp.task('Clean', function () {
    return gulp.src(['build/js', 'build/style'], {read: false})
        .pipe(clean());
});

gulp.task('watch', function() {
	gulp.watch('src/*.html', ['html']);
	gulp.watch('src/styles/partials/*.css', ['Style']); 
	gulp.watch('src/js/script.js', ['min__scripts']);
});

gulp.task('Html', ['html:build']);
gulp.task('Copy', ['image:build', 'fonts:build', 'PIE:build']);

gulp.task('Style', ['min__css']);

gulp.task('JavaScript', ['min__scripts', 'min__plagins']);

gulp.task('default', ['Clean',
					  'Style',
					  'JavaScript'
					  ], function() {
});

// gulp.task('default', ['Clean', 'Copy', 'Style', 'JavaScript']);
