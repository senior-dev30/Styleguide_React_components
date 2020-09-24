`ControlBox` provides style props to change it's styles based on a sibling
`checkbox` or `radio` input. It relies on a
[common CSS technique](https://dev.to/lkopacz/create-custom-keyboard-accessible-checkboxes-2036)
for styling custom controls.

For this component to work it should should:

1. have a sibling `input` and

2. be contained in a `label`

## Props

`ControlBox` composes the `Box` component so you can pass all `Box` props. By
default, we toggle the opacity of the `ControlBox` children by setting `_child`
to `{ opacity: 0 }` and `_checkedAndChild` to `{ opacity: 1 }`

| Prop                 | CSS selector                      | Description                                                                  |
| -------------------- | --------------------------------- | ---------------------------------------------------------------------------- |
| \_hover              | `[input]:hover + &`               | Styles for when the sibling `input` is hovered                               |
| \_focus              | `[input]:focus + &`               | Styles for when the sibling `input` is focused                               |
| \_disabled           | `[input]:disabled + &`            | Styles for when the sibling `input` is disabled                              |
| \_checked            | `[input]:checked + &`             | Styles for when the sibling `input` is checked                               |
| \_checkedAndDisabled | `[input]:checked:disabled + &`    | Styles for when the sibling `input` is checked and disabled                  |
| \_checkedAndFocus    | `[input]:checked:focus + &`       | Styles for when the sibling `input` is checked and focused                   |
| \_checkedAndHover    | `[input]:checked:hover + &`       | Styles for when the sibling `input` is checked and hovered                   |
| \_invalid            | `[input]:[aria-invalid=true] + &` | Styles for when the sibling `input` has `aria-invalid` set to `true`         |
| \_child              | `[input] + & > *`                 | Styles for the child of the `ControlBox`                                     |
| \_checkedAndChild    | `[input]:checked + & > *`         | Styles for the child of the `ControlBox` when the sibling `input` is checked |

## Usage

Creating a custom checkbox component

```jsx
import { VisuallyHidden, Box, Icon } from '../';

<label>
  {/* This is the sibling input, it's visually hidden */}
  <VisuallyHidden as='input' type='checkbox' defaultChecked />

  {/* This is the control box with a check icon as children */}
  <ControlBox
    border='1px solid'
    borderColor='lightgreen'
    size='24px'
    borderRadius='100px'
    _checked={{ backgroundColor: 'green', color: 'white', borderColor: 'green' }}
    _focus={{ borderColor: 'green', boxShadow: 'outline' }}
  >
    <Icon name='check' size='16px' color='white' />
  </ControlBox>

  {/* You can pass additional text */}
  <Box as='span' verticalAlign='center' marginLeft='12px'>
    Checkbox Label
  </Box>
</label>;
```

Creating a custom radio component

```jsx
import { VisuallyHidden, Box, Icon } from '../';

<label>
  {/* This is the sibling input, it's visually hidden */}
  <VisuallyHidden type='radio' as='input' />

  {/* This is the control box with a circle as children */}
  <ControlBox
    size='24px'
    backgroundColor='white'
    border='2px solid'
    borderRadius='full'
    type='radio'
    borderColor='inherit'
    _focus={{ boxShadow: 'outline' }}
    _hover={{ borderColor: 'gray' }}
    _disabled={{ opacity: '40%' }}
    _checked={{ backgroundColor: 'green', borderColor: 'green' }}
  >
    <Box size='50%' backgroundColor='white' borderRadius='full' />
  </ControlBox>

  {/* You can pass additional text */}
  <Box as='span' marginLeft={2} verticalAlign='center' userSelect='none'>
    This is a Radio
  </Box>
</label>;
```
