var gulp = require("gulp");
var livereload = require("gulp-livereload");

gulp.task("js", function(){
    gulp.src("./js/**/*.js").pipe(livereload());
});

gulp.task("watch", function(){
    livereload.listen();
    gulp.watch("./js/**/*.js", ["js"]);
});
