with `label='label'`

```js
const [isToggleOn, setToggle] = React.useState(false);

<ToggleButton label='accepted?' isToggleOn={isToggleOn} onToggle={value => setToggle(value)} />;
```

with `label='accepted?'`

```js
const [isToggleOn, setToggle] = React.useState(false);

<ToggleButton label='accepted?' isToggleOn={isToggleOn} onToggle={value => setToggle(value)} />;
```

with `toggleOnLabel`, `toggleOffLabel`

```js
const [isToggleOn, setToggle] = React.useState(false);

<ToggleButton
  toggleOnLabel='switched on'
  toggleOffLabel='switched off'
  label='accepted?'
  isToggleOn={isToggleOn}
  onToggle={value => setToggle(value)}
/>;
```
