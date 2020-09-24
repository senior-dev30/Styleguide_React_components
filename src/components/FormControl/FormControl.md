## Props

| Name         | Type      | Default | Description                                     |
| ------------ | --------- | ------- | ----------------------------------------------- |
| `isInvalid`  | `boolean` |         | If `true`, this prop is passed to its children. |
| `isRequired` | `boolean` |         | If `true`, this prop is passed to its children. |
| `isDisabled` | `boolean` |         | If `true`, this prop is passed to its children. |
| `isReadOnly` | `boolean` |         | If `true`, this prop is passed to its children. |

# Form Control

FormControl provides context such as `isInvalid`, `isDisabled`, and `isRequired`
to form elements. This context is used by the following components:

It follows the [WAI specifications](https://www.w3.org/WAI/tutorials/forms/) for
forms.

<!-- ## Usage

```jsx

<FormControl>
  <FormLabel htmlFor='email'>Email address</FormLabel>
  <Input type='email' id='email' aria-describedby='email-helper-text' />
  <FormHelperText id='email-helper-text'>We'll never share your email.</FormHelperText>
</FormControl>
``` -->

### Sample usage for a radio or checkbox group

```jsx
import FormControl from '../FormControl';
import FormLabel from '../FormLabel';
import { FormHelperTextLeftAligned } from '../FormHelperText';
import Radio, { RadioGroup } from '../Radio';

<FormControl as='fieldset'>
  <FormLabel as='legend'>Favorite Naruto Character</FormLabel>
  <RadioGroup defaultValue='Itachi'>
    <Radio value='Sasuke'>Sasuke</Radio>
    <Radio value='Nagato'>Nagato</Radio>
    <Radio value='Itachi'>Itachi</Radio>
    <Radio value='Sage of the six Paths'>Sage of the six Paths</Radio>
  </RadioGroup>
  <FormHelperTextLeftAligned id='email-helper-text'>
    Select only if you're a fan.
  </FormHelperTextLeftAligned>
</FormControl>;
```

### Making a field required

By passing the `isRequired` props, the `Input` field has `aria-required` set to
true, and the `FormLabel` will show a red asterisks.

```jsx
import FormLabel from '../FormLabel';
import Radio, { RadioGroup } from '../Radio';

// import FormControl from '../';

<FormControl isRequired>
  <FormLabel htmlFor='fname'>Label Text</FormLabel>
  <RadioGroup defaultValue='Itachi'>
    <Radio value='Sasuke'>Sasuke</Radio>
    <Radio value='Nagato'>Nagato</Radio>
    <Radio value='Itachi'>Itachi</Radio>
    <Radio value='Sage of the six Paths'>Sage of the six Paths</Radio>
  </RadioGroup>
</FormControl>;
```

<!--
### Select Example

```jsx
<FormControl>
  <FormLabel htmlFor='country'>Country</FormLabel>
  <Select id='country' placeholder='Select country' />
</FormControl>
``` -->
