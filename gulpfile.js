const gulp = require('gulp')
const run = require('gulp-run')

function bundle() {
  return gulp.src(['.']).pipe(run('yarn bundle'))
}

function _export() {
  return gulp.src(['./dist/**/*']).pipe(gulp.dest('D:\\FoundryVTT\\Data\\modules\\obsidian-dnd5e-fixer'))
}

/* PATCHER */

function patch() {
  return gulp.src(['./patch/obsidian/**/*']).pipe(gulp.dest('D:\\FoundryVTT\\Data\\modules\\obsidian'))
}

exports.bundle = bundle
exports.export = _export
exports.patch = patch

exports.publish = gulp.series(bundle, _export)
