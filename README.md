## injected-loader [![Build Status](https://travis-ci.org/aackerman/injected-loader.png?branch=master)](https://travis-ci.org/aackerman/injected-loader)

Webpack dependency injection for testing

### Usage

```js
import SquareInjector from './inject!./square';

var MockDependency = {};

let Square = SquareInjector({
  dependency: MockDependency
});
```
