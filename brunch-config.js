module.exports = {
  files: {
    javascripts: {
      joinTo: 'js/app.js'
    },
    stylesheets: {
      joinTo: 'css/app.css',
      order: {
        after: [ 'styles/styles.scss']
      }
    }
  },
  plugins: {
    sass: {
      mode: 'native',
      options: {
        includePaths: ['node_modules/bulma', 'app/src/components']
      }
    },
    postcss: {
      processors: [require('autoprefixer')]
    }
  }
}
