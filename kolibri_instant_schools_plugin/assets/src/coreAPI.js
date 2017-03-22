
module.exports = {
  styles: {
    theme: {
      module: require('./styles/theme.styl'),
    },
    keenVars: {
      module: require('./styles/keen.scss'),
    },
  },
  coreVue: {
    components: {
      navBar: {
        module: require('./views/nav-bar'),
      },
    },
  },
};

