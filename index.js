'use strict'

var options = {
  async: false,
  asyncGenerators: false,
  loose: false,
  spec: false
}

var requiredPlugins = require('./lib')

module.exports = {
  plugins: requiredPlugins.map(function (name) {
    return [require('@gerhobbelt/babel-plugin-' + name), options]
  })
}
