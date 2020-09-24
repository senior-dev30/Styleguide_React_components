Basic example with `custom` width

```jsx
import { Box } from '../';

<Box width='320px'>
  <Input placeholder='Input Placeholder' />
</Box>;
```

with `placeholder`

```jsx
<Input placeholder='Input Placeholder' />
```

with `defaultValue`

```jsx
<Input placeholder='Input Placeholder' defaultValue='Input text' />
```

with `invalid`

```jsx
<Input defaultValue='Input Error' isInvalid />
```

with `disabled`

```jsx
<Input disabled value='Input Field' />
```

with `icon`

```jsx
import { Icon, InputGroup, InputLeftElement } from '../';

<InputGroup>
  <InputLeftElement>
    <Icon icon='SEARCH' color='grey-light' size='19px' />
  </InputLeftElement>
  <Input placeholder='Search...' />
</InputGroup>;
```
