# Optimove-SDK-Web

[![GitHub release (latest by date)](https://img.shields.io/github/v/release/optimove-tech/Optimove-SDK-Web?style=flat-square)](https://github.com/optimove-tech/Optimove-SDK-Web/releases/latest)
![GitHub](https://img.shields.io/github/license/optimove-tech/Optimove-SDK-Web?style=flat-square)

# Usage

Add the package by runnnig: 

```npm install @optimove-inc/web```

Create an Optimove object:

```ts
import { Optimove } from '@optimove-inc/web';

const optimove = new Optimove("<YOUR TOKEN>");
```

Call T&T API's, for example:

```ts
optimove.setUserId("<YOUR USER ID>")
```

## License

Optimove Web SDK is available under the [MIT license](LICENSE).
