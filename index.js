var regex = /require\(([^\)]+)\)/g;

module.exports = function inject(src) {
  this.cacheable();
  return [
    'module.exports = function inject(__injections__) {',
    '  var module = {exports: {}};',
    '  ' + src.replace(regex, '(__injections__[$1] || $&)'),
    '  return module.exports;',
    '}'
  ].join("\n");
}
