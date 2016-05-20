// These gulp tasks can be ran using the command, gulp.
// Watch tasks are used to update file changes.
// use `ctrl+c` to quit the watch task.

var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var deploy = require('gulp-deploy-git');

gulp.task('deploy', function() {
  return gulp.src(['build/**/*'], {read: false })
    .pipe(deploy({
      repository: 'https://github.com/DanJFletcher/DanJFletcher.github.io.git',
			prefix: 'build'
    }));
});

// runs autoprefixer:
// input is the src css files
// ouput is located in build/css
// this adds the most updated vendor prefixes, and removes unneeded ones too.
gulp.task('prefix', function () {
	return gulp.src('./src/css/*.css')
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
		.pipe(gulp.dest('./build/css/'));
});

// default gulp tasks:
gulp.task('default', ['prefix'], function() {
	// watch for changes
	gulp.watch(['src/css/*.css'], ['prefix']);
});
