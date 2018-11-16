// Import the browser-sync module and create an "instance"
var browserSync = require("browser-sync").create();

/**
 * This example will serve files from the './docs' directory
 * and will automatically watch for html/css/js changes
 */
browserSync.init({
  watch: true,
  open: false,
  port: process.env.PORT || 8080,
  proxy: "http://localhost:3000",
  ui: {
    port: 8081
  },
  files: ["./dist/**/*.html"]
});
