/**
 * YOU WILL NEED TO RESTART SERVER AFTER UPDATING THIS FILE TO SEE CHANGES
 */

var path = require('path');
var glob = require('glob');

/**
 * Sections
 */

const AvatarComponents = [
  './src/components/Avatar/[A-Z]*.js',
  './src/components/AvatarWithNameTitle/[A-Z]*.js',
];

const AssignOpportunityManagersComponents = [
  './src/components/AssignOpportunityManagers/[A-Z]*.js',
];

const SpinnerComponents = './src/components/Spinkit/[A-Z]*.js';

const FormElementsComponents = [
  './src/components/Input/[A-Z]*.js',
  './src/components/InputGroup/InputGroup.js',
  './src/components/InputText/[A-Z]*.js',
  './src/components/InputTextArea/[A-Z]*.js',
  './src/components/InputPassword/[A-Z]*.js',
  './src/components/InputFloating/[A-Z]*.js',
  './src/components/InputBootstrap/[A-Z]*.js',
  './src/components/ToggleButton/[A-Z]*.js',
  './src/components/StarButton/[A-Z]*.js',
  './src/components/Radio/[A-Z]*.js',
  './src/components/FormLabel/[A-Z]*.js',
  './src/components/FormHelperText/[A-Z]*.js',
  './src/components/FormErrorMessage/[A-Z]*.js',
  './src/components/ControlBox/[A-Z]*.js',
];

const IdeaComponents = './src/components/IdeaRowCard/**/[A-Z]*.js';

const EventComponents = './src/components/Event/**/[A-Z]*.js';

const PipelineComponents = './src/components/Pipeline/**/[A-Z]*.js';

const LayoutComponents = [
  './src/components/Box/[A-Z]*.js',
  './src/components/PseudoBox/[A-Z]*.js',
  './src/components/FlexBox/[A-Z]*.js',
  './src/components/Stack/[A-Z]*.js',
];

/**
 * All components
 */
let allComponents = glob.sync(path.resolve(__dirname, 'src/components/**/[A-Z]*.js'));

/**
 * concatenate all sections
 */
let sectionsComponents = [
  ...AvatarComponents,
  ...AssignOpportunityManagersComponents,
  SpinnerComponents,
  ...FormElementsComponents,
  IdeaComponents,
  EventComponents,
  PipelineComponents,
  ...LayoutComponents,
].map(pathItem => glob.sync(path.resolve(__dirname, pathItem)));

sectionsComponents = sectionsComponents.reduce((acc, val) => acc.concat(val), []);

/**
 * 'All components' - Section Components
 */
const remainingComponents = allComponents.filter(
  pathItem => !sectionsComponents.includes(pathItem),
);

/**
 * Styelguide section strucgure
 * see https://react-styleguidist.js.org/docs/components.html#sections
 */
const sections = [
  {
    name: 'AvatarComponents',
    components: AvatarComponents,
    sectionDepth: 1,
    pagePerSection: true,
  },
  {
    name: 'AssignOpportunityManagersComponents',
    components: AssignOpportunityManagersComponents,
  },
  {
    name: 'SpinnerComponents',
    content: './src/components/Spinkit/README.md',
  },
  {
    name: 'FormElementsComponents',
    components: FormElementsComponents,
    sectionDepth: 1,
    pagePerSection: true,
  },
  {
    name: 'LayoutComponents',
    components: LayoutComponents,
    sectionDepth: 1,
    pagePerSection: true,
  },
  {
    name: 'EventsComponents',
    components: EventComponents,
    pagePerSection: true,
  },
  {
    name: 'PipelineComponents',
    components: PipelineComponents,
    sectionDepth: 1,
    pagePerSection: true,
  },
  {
    name: 'IdeaComponents',
    components: IdeaComponents,
    pagePerSection: true,
  },
  {
    name: 'MiscellaneousComponents',
    components: remainingComponents,
    sectionDepth: 1,
    pagePerSection: true,
  },
];

module.exports = sections;
