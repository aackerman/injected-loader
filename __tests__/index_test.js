describe('injected-loader', function(){
  it('injects mock dependencies', function(){
    var TestModuleInjector = require('../index!./test_module');
    spyOn(console, 'log');
    var spam = { 'spam': 'gross' };
    var TestModule = TestModuleInjector({
      './test_ham': spam
    });
    expect(console.log).toHaveBeenCalledWith(spam);
  });

  it('throws an error when invalid dependencies are injected', function(){
    var TestModuleInjector = require('../index!./test_module');
    expect(function(){
      TestModuleInjector({
        './test_sham': { 'spam': 'gross' }
      })
    }).toThrow();
  });
});
