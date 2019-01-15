# RNDM Render Plugin: Lodash

## About

This plugin provides the core functionality for the [RNDM Render package](https://github.com/rndm-com/rndm-render).

_**Please Note**: This plugin is also contained within the [Core Preset](https://github.com/rndm-com/rndm-render-preset-core) package, which also includes other functionality such as React Native components and lodash methods. If you are looking to get started, we highly recommend the [RNDM Client](https://github.com/rndm-com/rndm-client) which includes the standard [RNDM Render](https://github.com/rndm-com/rndm-render) and the core plugin._

## Installation

If you have not already done so, then please ensure you have installed the [RNDM Render](https://github.com/rndm-com/rndm-render) and [RNDM Plugin: Core](https://github.com/rndm-com/rndm-render-plugin-core) package.

### From NPM

```sh
npm install --save @rndm/render-plugin-lodash
```

### Post Installation

In order to allow this plugin to work, it must first be included in your project. You can do this inside your main index file:

```javascript
import '@rndm/render-plugin-core';
import '@rndm/render-plugin-lodash';
```

## Usage

The Lodash Plugin transforms the lodash methods into serialisable functions.

**Example**

```javascript
{
    type: '_.get',
    isFunc: true,
    args: [
        'a.b.c',
        {
            a: {
                b: {
                    c: 'test',
                },
            },
        },
    ],
};

// This will log out 'test'

```

For the full suite of available lodash methods, [please checkout their awesome and powerful utility library](https://lodash.com/docs).

_(Note: This library is versioned alongside its corresponding lodash version.)_
