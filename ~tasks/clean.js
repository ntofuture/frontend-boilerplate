import { deleteSync } from "del";
import config from "../config.js";

export const clean = (done) => {
  deleteSync(`${config.app}/**`);
  deleteSync(`${config.cache.path}/**`);
  done();
};
