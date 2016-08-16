# sc-sg-react-app-starter

This is a starter project for simple react app.
App contains one example react component with associated test.


## Development Setup

Project use webpack for task management.
Babel is used to transpile ES6 to ES5.
Mocha and Enzyme are used for testing.

Visit that directory and install the NPM dependencies:

```
cd <dir>
npm install
```

## Developing

All react components lives under the src/components directory.
Use webpack to build.

* `npm run dev` (lint and start dev server)
* `npm run build` (building app)


You can write your component in ES2015+ syntax. It supports `react` and `babel-stage2` presets.

## Testing

You can write your tests inside the `src/tests` directory. By default, the project comes
with one test case demonstrating how to write tests. Project configures your test with Mocha, [Enzyme](https://github.com/airbnb/enzyme), jsdom, and other essential JS testing tools.


You can run tests with the following commands:

* `npm test` (run tests once)

## Lint Rules

Your project is configured with ESLint based on the [Airbnb JavaScript style guide](https://github.com/airbnb/javascript) with some minor changes.

You can apply lint rules with the following commands:

* `npm run lint` (apply lint rules)


## TODO
Integration to style guide
