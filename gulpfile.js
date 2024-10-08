var gulp = require("gulp");
var scss = require("gulp-sass")(require('sass'));
var sassLint = require('gulp-sass-lint');
var sourcemaps = require("gulp-sourcemaps");
var nodemon = require("gulp-nodemon");
var browserSync = require("browser-sync");

// 소스 파일 경로
var path = {
    html: "./",
    assets: {
        styles: "./assets/styles",
        scripts: "./assets/scripts",
        images: "./assets/images"
    },
},
    // 산출물 경로
    dest_path = {
        html: "./",
        assets: {
            styles: "./assets/styles",
            scripts: "./assets/scripts",
            images: "./assets/images"
        },
    };

gulp.task('scss:compile', () => {
    return gulp.src(path.assets.styles + '/*.scss')
        .pipe(sourcemaps.init())
        .pipe(scss({
            outputStyle: 'expanded',
            sourceMap: true,
            sourceComments: false,
        }).on('error', scss.logError))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(dest_path.assets.styles))
        .pipe(browserSync.reload({ stream: true }));
});

gulp.task('scss:lint', () => {
    return gulp.src(path.assets.styles + "/**/*.scss")
        .pipe(sassLint())
        .pipe(sassLint.format())
        .pipe(sassLint.failOnError())
        .pipe(browserSync.reload({ stream: true }));
});

gulp.task('html', () => {
    return gulp.src(path + "/**/*.html")
        .pipe(gulp.dest(dest_path.html))
});

gulp.task('nodemon', () => {
    return new Promise(resolve => {
        nodemon({
            script: 'app.js'
            , watch: dest_path.html
        });

        resolve();
    })
});

gulp.task('watch', () => {
    return new Promise(resolve => {
        gulp.watch(path.html + "/**/*.html", gulp.series(['html']));
        gulp.watch(path.assets.styles + "/**/*.scss", gulp.series(['scss:compile']));

        resolve();
    });
});

gulp.task('browserSync', () => {
    return new Promise(resolve => {
        browserSync.init(null, {
            proxy: 'http://localhost:8080'
            , port: 3000
        });

        resolve();
    });
});

gulp.task('default',
    gulp.series([
        'scss:compile',
        'scss:lint',
        'html',
        'nodemon',
        'watch',
        'browserSync'
    ])
);
