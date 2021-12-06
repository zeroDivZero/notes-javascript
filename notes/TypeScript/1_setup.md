# SETUP

Install compiler (globally):

```bash
npm i -g typescript ts-node
```

`ts-node` is convenient TS execution and REPL for node.

## Verify

```bash
tsc --help
```

`tsc` is TS compiler.

## Node Types

If need type definitions (such as `console`):

```bash
npm i @types/node --save-dev
```

(saves as project dev dependency)
