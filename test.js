var fs = require('fs')
var test = require('tape')
var scream = require('.')

test('uppercases', function (t) {
  t.plan(1)

  var expected = fs.readFileSync(__filename, 'utf8').toUpperCase()

  var actual = ''
  fs.createReadStream(__filename)
    .pipe(scream())
    .on('data', function (d) { actual += d })
    .on('end', function () {
      t.equal(actual, expected)
    })
})
