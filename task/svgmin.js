// Обработка svg

import gulp from "gulp";
import plumber from "gulp-plumber";
import notify from "gulp-notify";
import imagemin from "gulp-imagemin";
import newer from "gulp-newer";

import path from "../config/path.js";
import app from "../config/app.js";

export default () => {
  return gulp.src(path.svg.src)
    .pipe(plumber({
      errorHandler: notify.onError(error => ({
        title: "SvgMin",
        message: error.message
      }))
    }))
    .pipe(newer(path.img.dest))
    .pipe(
      imagemin([
        imagemin.svgo(app.svgmin),
      ])
    )
    .pipe(gulp.dest(path.svg.dest));
}
