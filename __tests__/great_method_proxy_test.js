// import/require a dependency with the `injected` loader
// a function is returned that allows injecting dependecies to override
var GreatMethodProxyInjector = require('../index!./great_method_proxy');
var MockGreatMethod = jasmine.createSpy().and.returnValue(true);

// invoke the function with an object
// keys must match require statements
var GreatMethodProxy = GreatMethodProxyInjector({
  './my_great_method.js': MockGreatMethod
});

describe('GreatMethodProxy', function(){
  it('calls our mocked method', function(){
    expect(GreatMethodProxy()).toBe(true);
    expect(MockGreatMethod).toHaveBeenCalled();
  });
});
