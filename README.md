# Optimove-SDK-Web

[![GitHub release (latest by date)](https://img.shields.io/github/v/release/optimove-tech/Optimove-SDK-Web?style=flat-square)](https://github.com/optimove-tech/Optimove-SDK-Web/releases/latest)
![GitHub](https://img.shields.io/github/license/optimove-tech/Optimove-SDK-Web?style=flat-square)

# Usage

Add the package by runnnig:

`npm install @optimove-inc/web-sdk`

Create an Optimove object:

```ts
import { Optimove } from '@optimove-inc/web-sdk';

const optimove = new Optimove('<YOUR TOKEN>');
```

Set user id:

```ts
optimove.setUserId('<YOUR USER ID>');
```

Register a new user:

```ts
optimove.registerUser('<YOUR USER ID>', '<YOUR CUSTOMERS EMAIL>');
```

Set page visit:

```ts
optimove.setPageVisit('<URL>', '<TITLE>');
optimove.setPageVisit(); // defaults to location.href and document.title respectively
```

Report events:

```ts
optimove.reportEvent('<EVENT NAME>');
optimove.reportEvent('<EVENT NAME>', { '<PARAM1_KEY>': '<PARAM1_VALUE>' });
```

## License

Optimove Web SDK is available under the [MIT license](LICENSE).
