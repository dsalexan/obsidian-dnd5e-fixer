const GulpClient = require('gulp')

const gulp = require('gulp')
const run = require('gulp-run')

function bundle() {
  return gulp.src(['.']).pipe(run('yarn bundle'))
}

function _export() {
  return gulp.src(['./dist/**/*']).pipe(gulp.dest('D:\\FoundryVTT\\Data\\modules\\obsidian-dnd5e-fixer'))
}

exports.bundle = bundle
exports.export = _export

exports.publish = gulp.series(bundle, _export)
