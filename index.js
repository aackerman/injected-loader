var regex = /require\(([^\)]+)\)/g;

module.exports = function inject(src) {
  this.cacheable();

  // provide nice error handling
  var match = regex.exec(src);
  var matchMap = {};
  while (match != null) {
    matchMap[match[1].replace(/['"]/g, '')] = true;
    match = regex.exec(src);
  }
  var modules = JSON.stringify(matchMap);

  return [
    'module.exports = function inject(__injections__) {',
    '  var module = { exports: {} };',
    '  for (var __key__ in __injections__) {',
    '    if (!(__key__ in '+ modules +')) {',
    '       throw new Error(__key__ + " was attempted to be injected but was not found as a dependency in " + Object.keys(' + modules +'))',
    '    }',
    '  }',
    '  ' + src.replace(regex, '(__injections__[$1] || $&)'),
    '  return module.exports;',
    '}'
  ].join("\n");
}
