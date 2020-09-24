## Live at https://agreed-components.netlify.com/

#### Local Setup

`git clone git@github.com:vintagepenguin/decide_react_components.git`

`yarn`

`yarn run styleguide`

Go to http://localhost:6060/

#### Build for deployment

`yarn run styleguide:build`

<hr />

### **RULES FOR CODING ON THE TEAM**

1. All commits pushed up every day in WIP feature branch
2. Must get approval from team members before merging any code.
3. All engineers are responsible for QA'ing their own code
4. If there are any bugs in your code, you're responsible for fixing it, not another engineer

BONUS: We have auto deploy previews on pull requests. So you can check pull request preview to improve reviewing experience.

**How to add a new Component?**

Let's say our to-be-added component name is `HelloWorld`

- Create folder `/HelloWorld` inside `/src/components`
- Create two files`HelloWorld.js` and `HelloWorld.md` inside `/HelloWorld` folder
- Copy below HelloWorld component source code to `HelloWorld.js`

```
import React from 'react'

const HelloWorld = () => <div> HelloWorld Component!!! </div>

HelloWorld.displayName = 'HelloWorld';
HelloWorld.propTypes = { }
HelloWorld.defaultProps = { }

export default HelloWorld;
```

- Copy below HelloWorld component documentation to `HelloWorld.md`

> Don't forget wrap it in backquotes (```)

```
<div>
  <HelloWorld />
</div>
```

- Export the component in `src/components/index.js`

```
import HelloWorld from './HelloWorld/HelloWorld';

export {
  HelloWorld
}
```

- Restart your development server (`yarn run styleguide`)
- You should see `HelloWorld` in side panel
- [Optional] If you want to add your `HelloWorld` component to some section (e.g. Avatar, Event), you can do that from `styleguide.sections.js`

We use react-styleguidist https://react-styleguidist.js.org/ for doumentation. You can read more about how to document a component at https://react-styleguidist.js.org/docs/documenting.html.

**How to style a Component?**

<!-- 
Our styling is heavily based on `bootstrap` and `reactstrap` and prefer to use `reactstrap` components whenever we can to avoid re-inventing the wheel. And for that we actually copy `reactstrap` component source code to our project (See `Button.js`). So we could easily extend/modify it.

To customize bootstrap css, update bootstrap scss variabels in `scss/agreed-custom-bootstrap/_variables.scss`. It is preferrable if we customize using variabels and make bootstrap do heavey lifting for us. But if you need to override/extend bootstrap classes, make relative file e.g. `scss/agreed-custom-bootstrap/_<file-name>.scss` and import it inside `scss/argon-design-system-react.scss`
-->

For basic layout, designing our custom components, We've [`Box`](https://agreed-components.netlify.com/#/LayoutComponents/Box), [`FlexBox`](https://agreed-components.netlify.com/#/LayoutComponents/FlexBox), [`PseudoBox`](https://agreed-components.netlify.com/#/LayoutComponents/PseudoBox) components which take basic css style props (e.g. padding, margin, color, fontSize, letterSpacing, border ...).

--

If you've any questions, feel free to ping!
