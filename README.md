## injected-loader [![Build Status](https://travis-ci.org/aackerman/injected-loader.png?branch=master)](https://travis-ci.org/aackerman/injected-loader)

Webpack dependency injection for testing

### Usage

```js
// my_great_method.js
export default function() { return false; };
```

```js
// great_method_proxy.js
import MyGreatMethod from './my_great_method.js';

export default function(input) {
  return MyGreatMethod(input);
}
```

```js
// import/require a dependency with the `injected` loader
// a function is returned that allows injecting dependecies to override
import GreatMethodProxyInjector from 'injected!./great_method_proxy';
var MockGreatMethod = jasmine.createSpy().and.returnValue(true);

// invoke the function with an object, keys must match
// import/require statements, the key './my_great_method.js'
// matches the import statement in great_method_proxy.js
let GreatMethodProxy = GreatMethodProxyInjector({
  './my_great_method.js': MockGreatMethod
});

describe('GreatMethodProxy', function(){
  it('calls our mocked method', function(){
    // our mocked method returns true instead of using the
    // original method and returning false
    expect(GreatMethodProxy()).toBe(true);
    expect(MockGreatMethod).toHaveBeenCalled();
  });
});
```
