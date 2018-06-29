var Transform = require('stream').Transform

function scream (chunk, enc, next) {
  next(null, chunk.toString().toUpperCase())
}

module.exports = function screamStream () {
  var s = new Transform({ objectMode: false })
  s._transform = scream
  return s
}
