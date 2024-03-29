// vetur.config.js
// See: https://vuejs.github.io/vetur/guide/global-components.html
/** @type {import('vls').VeturConfig} */
module.exports = {
  projects: [
    {
      root: './',
      // **optional** default: `[]`
      // Register globally Vue component glob.
      // If you set it, you can get completion by that components.
      // It is relative to root property.
      // Notice: It won't actually do it. You need to use `require.context` or `Vue.component`
      globalComponents: [
        './src/components/**/*.vue'
      ]
    }
  ]
}
