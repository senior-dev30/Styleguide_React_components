const path = require('path');
const sections = require('./styleguide.sections');

module.exports = {
  title: 'Agreed React Components',
  sections,
  usageMode: 'expand',
  sortProps: props => props,
  pagePerSection: true,
  styleguideComponents: {
    Wrapper: path.join(__dirname, './src/styleguideComponents/Wrapper'),
    CodeRenderer: path.join(__dirname, './src/styleguideComponents/CodeRenderer'),
  },
  theme: {
    sidebarWidth: 250,
    maxWidth: 1370,
  },
  styles: {
    StyleGuide: {
      content: {
        // 'min-width': 'calc(100% - 100px)',
        // 'padding-left': '10px',
        // 'padding-right': '10px',
      },
    },
    Playground: {
      preview: {
        // '& > div, & > div > div': {
        // height: '100%',
        // padding: '10px',
        // overflow: 'scroll',
        // },
      },
    },
    Code: {
      code: {
        color: '#f3a4b5',
      },
    },
  },
  ignore: [path.join(__dirname, './src/components/index.js')],
  require: [path.join(__dirname, './src/assets/scss/agreed-design-styles.scss')], //argon-design-system-react.scss
};
