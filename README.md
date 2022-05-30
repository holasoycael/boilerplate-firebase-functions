
In your project folder use this to install:
```sh
$ git clone https://github.com/holasoycael/boilerplate-firebase-functions.git . && rm -rf ./.git && git init && git branch -M main && git add . && git commit -m "Initial commit"
```

Now just add your remote repository ✨

In the folder above functions use the command below to start the emulators:
```sh
$ firebase emulators:start --import=./data --export-on-exit=./data
```

To listen for changes inside the VSCode use the command:
```sh
$ yarn build --watch
```

## Using Path Mapping

To use `path alias` in your project ensure it is seen by both TypeScript and Babel. This will ensure that we have them in our text editor and the transpiler will know where they are.

Follow the examples below example:

`tsconfig.json`
```json
{
  "__comment_above__": "code above for example...",
  "baseUrl": ".",
  "paths": {
    "@controllers/*": ["./src/controllers/*"],
    "@routes/*": ["./src/routes/*"],
    "@configs/*": ["./src/configs/*"],
    "@middlewares/*": ["./src/middlewares/*"],
    "@modules/*": ["./src/modules/*"],
    "@models/*": ["./src/models/*"],
    "@typings/*": ["./src/typings/*"],
    "@utils/*": ["./src/utils/*"]
  },
  "__comment_below__": "code below for example...",
}
```

`babel.config.js`
```js
module.exports = {
  // code ...
  plugins: [
    ['module-resolver', {
      alias: {
        '@controllers': './src/controllers',
        '@utils': './src/utils',
        '@configs': './src/configs',
        '@middlewares': './src/middlewares',
        '@modules': './src/modules',
        '@models': './src/models',
        '@typings': './src/typings',
        '@routes': './src/routes'
      }
    }]
  ],
  // code ...
}

```

Now the project is ready to use 🔥

#
### `Design architecture`

```
functions
├── .vscode
│   └── settings.json
├── node_modules
├── src
│   ├── configs
│   │   ├── firebase.ts
│   │   └── serviceAccount.json
│   ├── controllers
│   │   └── HelloController.ts
│   ├── middlewares
│   │   ├── Default
│   │   │   ├── handle.ts
│   │   │   └── store.ts
│   │   └── `PascalCase`
│   │       ├── handle.ts
│   │       └── store.ts
│   ├── models
│   │   └── `PascalCase`
│   │       └── index.ts
│   ├── modules
│   │   ├── auth.ts
│   │   ├── firestore.ts
│   │   └── realtime.ts
│   ├── routes
│   │   └── `PascalCase`
│   │       └── index.tsx
│   ├── tests
│   ├── typing
│   │   ├── Default.ts
│   │   ├── Hello.ts
│   │   └── User.ts
│   ├── utils
│   │   └── jwt.ts
│   └── index.ts
├── .editorconfig
├── .eslintignore
├── .eslintrc.js
├── .gitignore
├── .prettierignore
├── .prettierrc
├── babel.config.js
├── package.json
├── README.md
├── tsconfig.dev.json
├── tsconfig.json
└── yarn.lock
```
