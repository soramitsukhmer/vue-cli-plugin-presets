module.exports = {
  engines: {
    node: ">=14.0.0 <=16"
  },
  scripts: {
    'bump:release': 'yarn version',
    'prebump:release': 'yarn lint && yarn test:unit --ci'
  },
  dependencies: {
    //
  },
  devDependencies: {
    "@commitlint/cli": "^13.2.1",
    "@commitlint/config-conventional": "^13.2.0",
    'vls': '^0.7.4'
  },
  gitHooks: {
    "post-commit": "commitlint --edit",
    "pre-push": "commitlint --edit"
  }
}
