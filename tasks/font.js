import { globbySync } from "globby";
import gulp from "gulp";
import config from "../config.js";
import { getCache, setCache } from "./cache.js";

export const font = () => {
  let files = globbySync(config.font.source.paths);
  if (files.length === 0) return gulp.src(".");

  let cacheFiles = getCache("fonts");
  setCache("fonts", files);
  if (cacheFiles) {
    files = files.filter((x) => !cacheFiles.some((s) => s === x));
  }
  if (files.length === 0) return gulp.src(".");

  return gulp.src(files, { encoding: false, allowEmpty: true, base: `${config.source}/fonts` }).pipe(gulp.dest(config.font.destination.path));
};
