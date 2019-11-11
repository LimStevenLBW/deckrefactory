"use strict";
/*
  A gulpfile is a file in your project directory titled gulpfile.js (like Makefile), 
  that automatically loads when you run the gulp command. Within this file, you'll often see gulp APIs.
*/

//Setting up dependencies; using gulp 4
var gulp = require("gulp");
var sass = require("gulp-sass");
var minifyCSS = require("gulp-clean-css");
//var uglify = require("gulp-uglify");
var rename = require("gulp-rename");
var changed = require("gulp-changed");

//Directory Addresses
const SCSS_SRC = "./src/assets/scss/**/*.scss"
const SCSS_DES = "./src/assets/css"

//Compile SASS SCSS
function compileSCSS(){
  return(
      gulp
      .src(SCSS_SRC)                                //Create Input Stream
      .pipe(sass().on("error", sass.logError))      //Compile into standard SCSS
      .pipe(minifyCSS)                              //Modify with minify package
      .pipe(rename({suffix: '.min'}))               //Modify with rename
      .pipe(changed(SCSS_DES))                      //Only affect changed files
      .pipe(gulp.dest(SCSS_DES))                    //Output Destination
  );
};

function watchSCSS(){
  gulp.watch(SCSS_SRC, compileSCSS);                // Detect Changes to Source and Repeat Task
}

exports.default = watchSCSS;                        //Set default task  
