import gulp from "gulp";
import plumber from "gulp-plumber";
import notify from "gulp-notify";
import svgstore from "gulp-svgstore";
import rename from "gulp-rename";
import imagemin from "gulp-imagemin";

import path from "../config/path.js";
import app from "../config/app.js";

export default () => {
  return gulp.src(path.svg.spriteSrc)
    .pipe(plumber({
      errorHandler: notify.onError(error => ({
        title: "Sprite",
        message: error.message
      }))
    }))
    .pipe(
      imagemin([
        imagemin.svgo(app.svgmin),
      ])
    )
    .pipe(svgstore(app.svgstore))
    .pipe(rename("sprite_auto.svg"))
    .pipe(gulp.dest(path.svg.dest))
}
