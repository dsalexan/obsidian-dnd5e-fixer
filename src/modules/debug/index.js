/* global Hooks */
import debug_package from 'debug'

if (typeof debug === 'undefined') {
  debug = debug_package

  Hooks.once('init', function () {
    debug('debug')('Initialized port module.')
  })
}
