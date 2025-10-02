import { globbySync } from "globby";
import gulp from "gulp";
import brotli from "gulp-brotli";
import gzip from "gulp-gzip";
import config from "../config.js";

const compressGzipFile = (sourcePath, destinationPath) => {
  let files = globbySync(sourcePath);
  if (files.length === 0) return gulp.src(".");

  return gulp
    .src(sourcePath, { encoding: false, allowEmpty: true })
    .pipe(brotli.compress({ quality: 11 }))
    .pipe(gulp.dest(destinationPath));
};

const compressBrotliFile = (sourcePath, destinationPath) => {
  let files = globbySync(sourcePath);
  if (files.length === 0) return gulp.src(".");

  return gulp.src(sourcePath, { encoding: false, allowEmpty: true }).pipe(gzip()).pipe(gulp.dest(destinationPath));
};

const compressGzipCss = () => compressGzipFile(`${config.scss.destination.path}/*.css`, config.scss.destination.path);
const compressGzipJs = () => compressGzipFile(`${config.js.destination.path}/*.js`, config.js.destination.path);

const compressBrotliCss = () => compressBrotliFile(`${config.scss.destination.path}/*.css`, config.scss.destination.path);
const compressBrotliJs = () => compressBrotliFile(`${config.js.destination.path}/*.js`, config.js.destination.path);

export const compress = gulp.parallel(compressGzipCss, compressGzipJs, compressBrotliCss, compressBrotliJs);
