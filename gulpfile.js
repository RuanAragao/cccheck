var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

var path = {
    scripts: 'js/**/*',
    styles: 'scss/**/*',
    images: 'img/**/*'
};

var dist = {
    scripts: 'dist/js',
    styles: 'dist/css',
    images: 'dist/img'
};

var sassOptions = {
    errLogToConsole: true,
    outputStyle: 'compressed'
};

gulp.task('scripts', function() {
    return gulp.src(path.scripts)
        .pipe(sourcemaps.init())
            .pipe(uglify())
            .pipe(concat('jquery.cccheck.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(dist.scripts));
});

gulp.task('sass', function() {
    return gulp.src(path.styles)
        .pipe(sourcemaps.init())
            .pipe(sass(sassOptions).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(dist.styles));
});

gulp.task('watch', function() {
    gulp.watch(path.scripts, ['scripts']);
    gulp.watch(path.styles, ['sass']);
});

gulp.task('default', ['sass', 'scripts']);
