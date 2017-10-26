# npm-publish-prerelease

[![npm version][npm-badge]][npm-href]

npm publish, but with dist-tag based on semver prerelease parts if present

## Install
```
npm install npm-publish-prerelease -g
```

## Usage
```
$ npm-publish-prerelease
```

Note: `npm-publish-prerelease` forwards all arguments passed to `npm publish`. For example, the following works:

```
$ npm-publish-prerelease --access public
```

## Examples

The dist-tag that is set corresonds to the [semver](https://github.com/npm/node-semver) prerelease parts. The string parts are joined together, or if there's no string parts, `"prerelease"` is used.

| Version                | Prerelease parts       | dist-tag                     |
|------------------------|------------------------|------------------------------|
| `"1.2.3"`              | `[]`                   | (npm defaults to `"latest"`) |
| `"1.2.3-0"`            | `[0]`                  | `"prerelease"`               |
| `"1.2.3-beta.0"`       | `["beta", 0]`          | `"beta"`                     |
| `"1.2.3-next.alpha.0"` | `["next", "alpha", 0]` | `"next.alpha"`               |

[npm-badge]: https://badge.fury.io/js/npm-publish-prerelease.svg
[npm-href]: https://www.npmjs.com/package/npm-publish-prerelease
