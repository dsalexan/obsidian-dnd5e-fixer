const gulp = require('gulp')
const run = require('gulp-run')
const flatten = require('gulp-flatten')
const merge = require('merge-stream')

const path = require('path')
const _ = require('lodash')
var argv = require('yargs').argv

function bundle() {
  const module = _.get(argv, 'module', argv.m)

  if (!module) throw Error('No module informed for bundling.')

  return gulp
    .src(['.'])
    .pipe(run(`rollup -c ./src/modules/${module}/rollup.config.js`))
    .pipe(run(`babel-node ./src/modules/${module}/.build-module.js`))
}

function patchlib() {
  return gulp.src(['./src/patchlib.js']).pipe(gulp.dest('./dist/scripts'))
}

function _export() {
  const module = _.get(argv, 'module', argv.m)

  if (!module) throw Error('No module informed for bundling.')

  return gulp.src([`./dist/${module}/**/*`]).pipe(gulp.dest(`D:\\FoundryVTT\\Data\\modules\\${module}`))
}

/* PATCHER */

function pre_patch() {
  const modules = require('./patch/changes')

  return merge(
    modules.map(({ source, target, files }) => {
      return merge(
        files.map(([directory, file]) =>
          gulp
            .src([path.join(source, directory, file)])
            .pipe(flatten({ includeParents: 1 }))
            .pipe(gulp.dest(path.join(target, directory)))
        )
      )
    })
  )
}

function patch() {
  const modules = require('./patch/changes')

  return merge(
    modules.map(({ source, target: patchedVersion }) => gulp.src([`${patchedVersion}/**/*`]).pipe(gulp.dest(source)))
  )
}

exports.bundle = bundle
exports.patchlib = patchlib
exports.export = _export

exports.patch = patch
exports['pre:patch'] = pre_patch

exports.publish = gulp.series(bundle, _export)
