## injected-loader https://travis-ci.org/aackerman/injected-loader.svg?branch=master

Webpack dependency injection for testing

### Usage

```
import SquareInjector from './inject!./square';

var MockDependency = {};

let Square = SquareInjector({
  dependency: MockDependency
});
```
