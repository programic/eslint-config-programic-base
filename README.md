# eslint-config-programic-base

[![npm version](https://badge.fury.io/js/eslint-config-programic-base.svg)](http://badge.fury.io/js/eslint-config-programic-base)

This package provides Programic's EcmaScript .eslintrc (without Vue/TypeScript plugins) as an extensible shared config.

## Usage

Our default export contains all of our EcmaScript rules, including ECMAScript 6+. It requires `eslint` and `eslint-plugin-import`.

1. Install the correct versions of each package, which are listed by the command:

  ```sh
  npm info "eslint-config-programic-base@latest" peerDependencies
  ```

<details>
  <summary>Want to see shortcuts on how to do this? Click here!</summary>

  If using **npm 5+**, use this shortcut

  ```sh
  npx install-peerdeps --dev eslint-config-programic-base
  ```

  If using **yarn**, you can also use the shortcut described above if you have npm 5+ installed on your machine, as the command will detect that you are using yarn and will act accordingly.
  Otherwise, run `npm info "eslint-config-programic-base@latest" peerDependencies` to list the peer dependencies and versions, then run `yarn add --dev <dependency>@<version>` for each listed peer dependency.


  If using **npm < 5**, Linux/OSX users can run

  ```sh
  (
    export PKG=eslint-config-programic-base;
    npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
  )
  ```

  Which produces and runs a command like:

  ```sh
    npm install --save-dev eslint-config-programic-base eslint@^#.#.# eslint-plugin-import@^#.#.#
  ```

  If using **npm < 5**, Windows users can either install all the peer dependencies manually, or use the [install-peerdeps](https://github.com/nathanhleung/install-peerdeps) cli tool.

  ```sh
  npm install -g install-peerdeps
  install-peerdeps --dev eslint-config-programic-base
  ```

  The cli will produce and run a command like:

  ```sh
  npm install --save-dev eslint-config-programic-base eslint@^#.#.# eslint-plugin-import@^#.#.#
  ```
</details>

2. Add `"extends": "programic-base"` to your .eslintrc.

3. Add a lint script to your package.json: `eslint . --ext .js,.jsx` so you can run `npm run lint` or `yarn lint`. Replace the lint script if it already exists.
