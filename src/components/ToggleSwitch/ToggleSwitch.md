with `checked`

```
const [isChecked, setChecked] = React.useState(false);

<ToggleSwitch isChecked={isChecked} onChange={checkedChange => setChecked(checkedChange)} />
```

with `label`

```js
const [isChecked, setChecked] = React.useState(false);

<ToggleSwitch
  isChecked={isChecked}
  onChange={checkedChange => setChecked(checkedChange)}
  label='Agree to Terms & Conditions'
/>;
```
