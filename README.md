# Optimove-SDK-Web

[![GitHub release (latest by date)](https://img.shields.io/github/v/release/optimove-tech/Optimove-SDK-Web?style=flat-square)](https://github.com/optimove-tech/Optimove-SDK-Web/releases/latest)
![GitHub](https://img.shields.io/github/license/optimove-tech/Optimove-SDK-Web?style=flat-square)

Web SDK npm wrapper for Track and Trigger only

# Usage

Add the package by running:

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
optimove.reportEvent('<event_name>');
optimove.reportEvent('<event_name>', { '<param1_key>': '<param1_value>' });
```

## License

Optimove Web SDK is available under the [MIT license](LICENSE).
