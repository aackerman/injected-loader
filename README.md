## injected-loader

Webpack dependency injection for testing

### Usage

```
import SquareInjector from './inject!./square';

var MockDependency = {};

let Square = SquareInjector({
  dependency: MockDependency
});
```
