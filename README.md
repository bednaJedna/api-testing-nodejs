# api-testing-nodejs

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)

## About <a name = "about"></a>

Playground to figure out (primarily REST) API testing using Node.js environment and tools.

For REST API endpoint we are using public and free [JSONPlaceholder](https://jsonplaceholder.typicode.com/).

## Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software.

- [Node.js](https://nodejs.org/en/) - must be pre-installed on you computer, rest will be handled by npm
- [Mocha](https://mochajs.org/)
- [chai](https://www.chaijs.com/)
- [chai-http](https://www.chaijs.com/plugins/chai-http/)

### Installing

Clone the repo

```
git clone https://github.com/bednaJedna/api-testing-nodejs.git
```

Install all dependencies by npm

```
npm install
npm update
```

## Usage <a name = "usage"></a>

Run all tests

```
./node_modules/.bin/mocha test/spec/** -t 10000
```
