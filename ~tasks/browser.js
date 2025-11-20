import browserSync from "browser-sync";
import { spawn } from "child_process";
import config from "../config.js";

export const browser = (done) => {
  if (config.browser.isActive) {
    const bs = browserSync({
      notify: true,
      port: config.port,
      server: { baseDir: [config.app] },
      open: false,
    });

    bs.emitter.on("init", () => {
      spawn(config.browser.path, config.browser.args, {
        detached: true,
        stdio: "ignore",
      }).unref();
    });
  } else {
    browserSync({ notify: true, port: config.port, server: { baseDir: [config.app] } });
  }

  done();
};
