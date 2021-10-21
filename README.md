# vue-cli-plugin-presets

This is a `vue-cli` **3.x** plugin to scaffold new Frontend application.

## 🤘 Usage

To scaffold a new project with `soramitsukhmer/vue-cli-plugin-soramitsukhmer-presets` run the following command:

```sh
vue create --preset soramitsukhmer/vue-cli-plugin-presets example-project
```

### 💁 Troubleshooting

If you are having issues, make sure you have the following configuration in `~/.npmrc`:

```
@soramitsukhmer:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=[github personal access token]
```


## ⭐ Features

- Babel
- Vue Rotuer
- VueX
- ESLint
- Jest
- Vuetify
- `@soramitsukhmer/vue-cli-plugin-scaffold`
- `@soramitsukhmer/vuetify-plugin`

## 📦 Preset

**`@vue/cli-plugin-babel`**
```sh
# Default
```

**`@vue/cli-plugin-router`**
```json
{
  "historyMode": true
}
```

**`@vue/cli-plugin-vuex`**
```sh
# Default
```

**`@vue/cli-plugin-eslint`**
```json
{
  "config": "standard",
  "lintOn": ["save", "commit"]
}
```

**`@vue/cli-plugin-unit-jest`**
```sh
# Default
```


**`@soramitsukhmer/vue-cli-plugin-scaffold`**
```json
{
  "useMock": false,
  "useSoramitsuVuetifyPlugin": true
}
```

**`vue-cli-plugin-vuetify`**
```json
{
  "preset": "configure",
  "replaceComponents": false,
  "useTheme": true,
  "useCustomProperties": true,
  "iconFont": "mdi",
  "installFonts": true,
  "useAlaCarte": true,
  "locale": "en"
}
```

## References

- [Vue CLI - Plugin Development Guide](https://cli.vuejs.org/dev-guide/plugin-dev.html#getting-started)
- [Vue CLI - Configuration Reference](https://cli.vuejs.org/config/#configuration-reference)
