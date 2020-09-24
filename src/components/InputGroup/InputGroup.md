### Building Blocks

- `InputGroup`: The wrapper component that manages the union of Input and it's addons.
- `InputLeftElement`: The left-side element addition to the Input. Must be a direct child of `InputGroup`.
- `InputRightElement`: The right-side element addition to the Input. Must be a direct child of `InputGroup`.

---

- `Input`: Basic text input component
- `InputFloating`: Styled custom input component

## Props

### InputGroup Props

| Name     | Default | Type             | Description                                                                                                                                            |
| -------- | ------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| children |         | `PropTypes.node` | The children of the group must contain `Input` / `InputFloating` type of component, along with `InputLeftElement` and/or `InputLeftElement` components |

### InputLeftElement Props

| Name                 | Type              | Default |
| -------------------- | ----------------- | ------- |
| children             | `React.ReactNode` |
| disablePointerEvents | `bool`            | `false` |

### InputRightElement Props

| Name                 | Type              | Default |
| -------------------- | ----------------- | ------- |
| children             | `React.ReactNode` |
| disablePointerEvents | `bool`            | `false` |

#### Example with `left` and `right` side elements

```jsx
import { Icon, Input, InputGroup, InputLeftElement, InputRightElement } from '../';

<InputGroup>
  <InputLeftElement>
    <Icon icon='ADD' color='primary' size='19px' />
  </InputLeftElement>
  <Input placeholder='Input with elements on both sides' />
  <InputRightElement>
    <Icon icon='PAPERPLANCE' color='secondary' size='19px' />
  </InputRightElement>
</InputGroup>;
```

#### `Floating` Input Example

```jsx
import { Icon, InputGroup, InputFloating, InputLeftElement } from '../';

<InputGroup>
  <InputLeftElement width='59px'>
    <Icon icon='LOCATION' color='secondary' size='24px' />
  </InputLeftElement>
  <InputFloating placeholder='Location' />
</InputGroup>;
```
