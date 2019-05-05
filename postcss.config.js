const themeDir = __dirname;

module.exports = {
  plugins: [
    require('postcss-import') ({
        path: [themeDir + '/node_modules/', themeDir + '/assets/css'],
    })
  ]
};
