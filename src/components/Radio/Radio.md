# Radio

Radios are used when only one choice may be selected in a series of options.

The Radio component composes `ControlBox`, a component we created to make it
easy to style sibling inputs.

# RadioGroup

`RadioGroup` is a helpful wrapper used to group Radio components that provides an easier API.

When using `Radio` as child of `RadioGroup` you can pass `name`, `color`, `size`, `isDisabled`, `value` ,`onChange` to `RadioGroup`.
These props will passed to each child `Radio` so you don't have to individually pass for each `Radio`. And if any of these prop is passed to both, `RadioGroup` and `Radio`, `Radio` prop supersedes.

| Name         | Type   | Default | Description                                                                                |
| ------------ | ------ | ------- | ------------------------------------------------------------------------------------------ |
| name         | string |         | Will be passed to `Radio`, sets name of radio input                                        |
| value        | string |         | sets the value of radio input                                                              |
| defaultValue | string |         | sets the initial value                                                                     |
| color        | string |         | Will be passed to `Radio`, sets the radio color                                            |
| size         | string |         | Will be passed to `Radio`, sets the radio size                                             |
| isDisabled   | bool   |         | If `true`, this prop is passed to its children.                                            |
| isInline     | bool   |         | if `true`, the children `Radio` will shown horizontally                                    |
| onChange     | func   |         | Only applicable when radio input is not conrolled, use like `onChange(event, clickeValue)` |
| spacing      | string | 24px    | sets the space between two `Radio` child                                                   |

<hr />

### Usage

### Basic Example

```jsx
import { RadioGroup } from './';

const [value, setValue] = React.useState('1');

<RadioGroup onChange={e => setValue(e.target.value)} value={value}>
  <Radio value='1'>First</Radio>
  <Radio value='2'>Second</Radio>
  <Radio value='3'>Third</Radio>
</RadioGroup>;
```

### Radio with custom color

You can override the color scheme of the Radio with any color.

```jsx
import { RadioGroup } from './';

<RadioGroup defaultValue='2' isInline>
  <Radio color='red' value='1'>
    Click me
  </Radio>
  <Radio color='purple' value='2'>
    Click me!
  </Radio>
  <Radio color='green' value='3'>
    Click me too!
  </Radio>
</RadioGroup>;
```

### Radio sizes

The checkbox comes with 3 sizes: `sm`, `md`, `lg`

```jsx
import { RadioGroup } from './';

<RadioGroup defaultValue='2'>
  <Radio size='sm' name='1' value='1'>
    sm Size
  </Radio>
  <Radio size='md' name='1' value='2'>
    md Size
  </Radio>
  <Radio size='lg' name='1' value='3' defaultChecked>
    lg Size
  </Radio>
</RadioGroup>;
```

### Disabled radios

```jsx
import { RadioGroup } from './';

<RadioGroup defaultValue='1'>
  <Radio value='1' isDisabled>
    Checked Disabled
  </Radio>
  <Radio value='2' isDisabled>
    Unchecked Disabled
  </Radio>
  <Radio value='3'>Neither Checked, Neither Disalbed</Radio>
</RadioGroup>;
```

### Horizontal alignment

```jsx
import { RadioGroup } from './';

<RadioGroup isInline spacing={4} defaultValue='1'>
  <Radio value='1'>Radio 1</Radio>
  <Radio value='2'>Radio 2</Radio>
  <Radio value='3'>Radio 3</Radio>
</RadioGroup>;
```

### Invalid Checkbox

```jsx
<Radio isInvalid>Radio</Radio>
```

### With Label

```jsx
import FormControl from '../FormControl';
import FormLabel from '../FormLabel';
import { RadioGroup } from './';

<FormControl as='fieldset'>
  <FormLabel as='legend'>Form Label</FormLabel>
  <RadioGroup isInline defaultValue='Itachi'>
    <Radio value='1'>Radio 1</Radio>
    <Radio value='2'>Radio 2</Radio>
    <Radio value='3'>Radio 3</Radio>
  </RadioGroup>
</FormControl>;
```

### With help hint

```jsx
import FormControl from '../FormControl';
import FormLabel from '../FormLabel';
import { RadioGroup } from './';
import FormErrorMessage from '../FormErrorMessage';
import { FormHelperTextLeftAligned } from '../FormHelperText';

<FormControl as='fieldset'>
  <FormLabel as='legend'>Form Label</FormLabel>
  <RadioGroup isInline defaultValue='Itachi'>
    <Radio value='1'>Radio 1</Radio>
    <Radio value='2'>Radio 2</Radio>
    <Radio value='3'>Radio 3</Radio>
  </RadioGroup>
  <FormHelperTextLeftAligned id='email-helper-text'>
    Select only if you're a fan.
  </FormHelperTextLeftAligned>
</FormControl>;
```

### With error messsage

```jsx
import FormControl from '../FormControl';
import FormLabel from '../FormLabel';
import { RadioGroup } from './';
import FormErrorMessage, { FormErrorMessageLeftAligned } from '../FormErrorMessage';

<FormControl as='fieldset' isInvalid>
  <FormLabel as='legend'>Form Label</FormLabel>
  <RadioGroup defaultValue='Itachi'>
    <Radio value='1'>Radio 1</Radio>
    <Radio value='2'>Radio 2</Radio>
    <Radio value='3'>Radio 3</Radio>
  </RadioGroup>
  <FormErrorMessageLeftAligned id='email-error-text'>
    This input is invalid
  </FormErrorMessageLeftAligned>
</FormControl>;
```
