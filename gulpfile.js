'use strict';
var gulp = require('gulp');

//automatically load all plugins in your node_modules
var plugins = require('gulp-load-plugins')();


var paths = {
    scripts: ['app/scripts'],
    images: ['app/images/**/*'],
    stylesheets: {
        watch: 'app/styles/**/*.scss',
        src: 'app/styles/main.scss',
        dest: 'dist/styles/'
    },
    fonts: ['app/fonts/**/*'],
    templates: ['app/*.html']
};

gulp.task('scripts', function() {
    // Minify and copy all JavaScript (except vendor scripts)
    return gulp.src(paths.scripts)
        .pipe(plugins.uglify())
        .pipe(plugins.concatSourcemap('all.min.js'))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('sass', function () {
    gulp.src(paths.stylesheets.src)
        .pipe(plugins.sass())
        .pipe(gulp.dest(paths.stylesheets.dest));
});

gulp.task('templates', function(){
    return gulp.src(paths.templates)
        .pipe(gulp.dest('dist'));
});

// Copy all static images
gulp.task('images', function() {
    return gulp.src(paths.images)
        // Pass in options to the task
        .pipe(plugins.imagemin({optimizationLevel: 5}))
        .pipe(gulp.dest('dist/img'));
});

gulp.task('fonts', function() {
    return gulp.src(paths.fonts)
        .pipe(gulp.dest('dist/fonts'));
});

//simple http server
gulp.task('connect', function () {
    var connect = require('connect');
    var dist = connect()
        .use(require('connect-livereload')({ port: 35729 }))
        .use(connect.static('dist'))
        // .use(connect.static('.tmp'))
        .use(connect.directory('dist'));
    require('http').createServer(dist)
        .listen(9000)
        .on('listening', function () {
            console.log('Started connect web server on http://localhost:9000');
        });
});

//open the server
gulp.task('serve', ['connect'], function () {
    require('opn')('http://localhost:9000');
});


gulp.task('watch', ['connect', 'serve'], function () {
    var server = plugins.livereload();
    // watch for changes
    gulp.watch([
        'app/*.html',
        'app/scripts/**/*.js',
        'app/images/**/*'
    ]).on('change', function (file) {
        server.changed(file.path);
    });
    gulp.watch(paths.stylesheets.watch, ['sass']);
    gulp.watch(paths.scripts, ['scripts']);
    gulp.watch(paths.images, ['images']);
    gulp.watch(paths.templates, ['templates']);
    // gulp.watch('bower.json', ['wiredep']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['scripts', 'images', 'fonts', 'sass', 'templates', 'watch']);
gulp.task('build', ['scripts', 'images', 'fonts', 'templates', 'sass']);

