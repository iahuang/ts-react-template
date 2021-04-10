# ts-react-template
A Typescript/React.js template project that doesn't use Webpack or Babel!

## Usage

```bash
> npm install
> tsc
```
Then open `static/index.html` in your browser or serve this directory from a server.

## How Does it Work?

The Typescript compiler has the ability to bundle multiple modules into a single file using either [SystemJS](https://github.com/systemjs/systemjs) or [AMD](https://requirejs.org/docs/whyamd.html). Additionally the Typescript compiler is able to convert JSX syntax into React API calls. Basically we create a module that assumes the existence of external React files, and provides them at runtime using an AMD module loader (we use [RequireJS](https://requirejs.org/docs/whyamd.html) for this).

## Why?

The recommended method for creating a React/TS project, namely [`create-react-app`](https://github.com/facebook/create-react-app) creates a template project with a lot of added complexity, primarily the dependency on Webpack. For simpler projects, one may not want to add these extra bells and whistles. This template project allows you to write React code more simply, without the need for preprocessors or bundlers.
