// Обработка html

import gulp from "gulp";
import plumber from "gulp-plumber";
import notify from "gulp-notify";
import fileInclude from "gulp-file-include";
import size from "gulp-size";
import htmlMin from "gulp-htmlmin";
import webpHtml from "gulp-webp-html";
import path from "../config/path.js";
import app from "../config/app.js";

export default () => {
  return gulp.src(path.html.src)
    .pipe(plumber({
      errorHandler: notify.onError(error => ({
        title: "HTML",
        message: error.message
      }))
    }))
    .pipe(fileInclude())
    .pipe(webpHtml())
    .pipe(size({ title: "Before" }))
    .pipe(htmlMin(app.htmlmin))
    .pipe(size({ title: "After" }))
    .pipe(gulp.dest(path.html.dest));
}
