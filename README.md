# hexo-tag-config

[![NPM version](https://badge.fury.io/js/hexo-tag-config.svg)](https://www.npmjs.com/package/hexo-tag-config)
[![CI](https://img.shields.io/github/workflow/status/YoshinoriN/hexo-tag-config/CI/master?label=CI)](https://github.com/YoshinoriN/hexo-tag-config/actions) [![Coverage Status](https://coveralls.io/repos/github/YoshinoriN/hexo-tag-config/badge.svg?branch=master)](https://coveralls.io/github/YoshinoriN/hexo-tag-config?branch=master)

A hexo plugin for insert hexo configuration values (_config.yml) to your post/page.

## Installation

```
npm install hexo-tag-config --save
```

## Usaga

Specify `_config.yml` key.

```
{% config _config.yml_keys %}
```

Example

```
// Plugin get url key values in _config.yml
{% config url %}

// Also you can specify nested key
{% config highlight.line_number %}
```

## Development

* [Document](./docs/development)
