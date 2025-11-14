import { globbySync } from "globby";
import gulp from "gulp";
import config from "../config.js";
import { getCache, setCache } from "./cache.js";

export const file = () => {
  let files = globbySync(config.file.source.paths);
  if (files.length === 0) return gulp.src(".");

  let cacheFiles = getCache("files");
  setCache("files", files);
  if (cacheFiles) {
    files = files.filter((x) => !cacheFiles.some((s) => s === x));
  }
  if (files.length === 0) return gulp.src(".");

  return gulp.src(files, { encoding: false, allowEmpty: true, base: `${config.source}/files` }).pipe(gulp.dest(config.file.destination.path));
};
