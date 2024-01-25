# @millionfor/global

Provide a standard api for cross envs global access.

## Installation

```bash
$ npm i @millionfor/global
```

## Usage

```js

import G from '@millionfor/global'

console.log(G === window) // true for browser
console.log(G === global) // true for nodejs

```

## APIs

```ts
declare const global: any;

export default global;

```

## License

MIT
