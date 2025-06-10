# Optimove-SDK-Web

Web SDK npm wrapper for Track and Trigger only

# Usage

Add the package by running:

`npm install @samik3k/optimove-sdk-fork`

`yarn add @samik3k/optimove-sdk-fork`

Create an Optimove object:

```ts
import Optimove from '@samik3k/optimove-sdk-fork';

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
// PAGE_CATEGORY is optional
optimove.setPageVisit('<URL>', '<TITLE>', '<PAGE_CATEGORY>');
optimove.setPageVisit(); // defaults to location.href and document.title respectively
```

Report events:

```ts
optimove.reportEvent('<event_name>');
optimove.reportEvent('<event_name>', { '<param1_key>': '<param1_value>' });
// callback is optional, if no need set null
// userId is optional, string
optimove.reportEvent('<event_name>', { '<param1_key>': '<param1_value>' }, null, '<userId>');
```

## License

Optimove Web SDK is available under the [MIT license](LICENSE).


# ChangeLog

## version 0.1.3 date (10.06.2025 12:00 GMT+3):
Updated reportEvent

Replace self to globalThis in sdk.js

# Credits
Optimove <konstantin_a@optimove.com> (https://www.optimove.com/)

Alexander Sokolov <samik3k@gmail.com> (fork)
