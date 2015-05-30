// GreatMethodProxy.js
var MyGreatMethod = require('./my_great_method.js');

module.exports = function(input) {
  return MyGreatMethod(input)
}
