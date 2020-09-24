## Selectors and Props

PseudoBox can be used to style any interactive component. You can apply styles
to the following selectors. The selectors are also ARIA-friendly to help you
naturally use `aria` attributes for better accessibility.

All `PseudoBox` props can use the style props of `Box`.

| Prop           | Selector                               |
| -------------- | -------------------------------------- |
| `_hover`       | `&:hover`                              |
| `_active`      | `&:active`                             |
| `_focus`       | `&:focus`                              |
| `_before`      | `&:before`                             |
| `_after`       | `&:after`                              |
| `_placeholder` | `&::placeholder`                       |
| `_first`       | `&:first-of-type`                      |
| `_last`        | `&:last-of-type`                       |
| `_groupHover`  | `[role=group]:hover &`                 |
| `_disabled`    | `&:disabled`, `[aria-disabled=true]`   |
| `_readonly`    | `&[readonly]`, `&[aria-readonly=true]` |
| `_checked`     | `&[aria-checked=true]`                 |
| `_selected`    | `&[aria-selected=true]`                |
| `_expanded`    | `&[aria-expanded=true]`                |
| `_invalid`     | `&[aria-invalid=true]`                 |
| `_pressed`     | `&[aria-pressed=true]`                 |
| `_invalid`     | `&[aria-invalid=true]`                 |
| `_grabbed`     | `&[aria-grabbed=true]`                 |

# PseudoBox

This component is inspired by
[Tailwind CSS](https://tailwindcss.com/docs/pseudo-class-variants) Pseudo-Class
variants and [Glamorous Pseudo](https://github.com/tkh44/glamorous-pseudo/).

PseudoBox composes `Box` component and provides props to style common CSS
pseudo selectors.

Styling elements on hover, focus, and more can be accomplished by prefixing `_`
with the appropriate pseudo selector.

For example, to style `&:hover`, use the `_hover` prop and pass the style props.
We use the underscore `_` notation to visually separate pseudo style props from
regular style props.

## Usage

```jsx
import FlexBox from '../FlexBox';

<FlexBox as='form'>
  <PseudoBox
    as='input'
    placeholder='Your email'
    type='email'
    flex='1'
    paddingVertical={2}
    paddingHorizontal={4}
    borderRadius='md'
    padding='10px'
    backgroundColor='white'
    borderWidth='4px'
    _hover={{ outline: 'none', borderColor: 'pink' }}
    _focus={{
      outline: 'none',
      backgroundColor: 'white',
      boxShadow: 'outline',
      borderColor: 'teal',
    }}
  />
  <PseudoBox
    as='button'
    backgroundColor='teal'
    paddingVertical={2}
    paddingHorizontal={4}
    padding='10px'
    marginLeft={3}
    borderRadius='md'
    fontWeight='semibold'
    color='white'
    opacity='0.5'
    _hover={{ opacity: 1 }}
    _focus={{ boxShadow: 'outline' }}
  >
    Sign Up
  </PseudoBox>
</FlexBox>;
```

PseudoBox includes first-class support for styling elements on hover, focus,
active, disabled, visited, first-child, last-child, odd-child, even-child,
focus-within, and more.

<!-- It was created to help reduce the need to pass `css` prop or use `styled(...)`
function to style common pseudo states. -->

---

### Hover

Add the `_hover` prop to only apply style props on hover.

```jsx
<PseudoBox
  as='button'
  color='blue'
  fontWeight='semibold'
  padding='12px'
  borderWidth='1px'
  borderColor='blue'
  borderRadius='md'
  _hover={{ backgroundColor: 'blue', color: 'white' }}
  _focus={{ boxShadow: 'outline' }}
>
  Hover me
</PseudoBox>
```

### Focus

Add the `_focus` prop to only apply a styles on focus.

```jsx
<PseudoBox
  as='input'
  placeholder='Focus me'
  paddingVertical='8px'
  paddingHorizontal='16px'
  backgroundColor='lightgray'
  color='white'
  borderColor='transparent'
  borderWidth='2px'
  borderRadius='md'
  _focus={{ backgroundColor: 'white', borderColor: 'blue' }}
/>
```

### Active

Add the `_active` prop to only apply a styles on active.

```jsx
<PseudoBox
  as='button'
  fontWeight='semibold'
  paddingVertical='8px'
  paddingHorizontal='16px'
  borderRadius='md'
  color='white'
  backgroundColor='lightgreen'
  _active={{ backgroundColor: 'green' }}
  _focus={{ boxShadow: 'outline' }}
>
  Click me
</PseudoBox>
```

### Disabled

Add the `_disabled` prop to style an element when it is disabled. This style
will apply when the `disabled` or `aria-disabled` attribute of an element is set
to `true`

```jsx
import Stack from '../Stack';

<Stack isInline>
  <PseudoBox
    as='button'
    fontWeight='semibold'
    paddingVertical={2}
    paddingHorizontal={4}
    borderRadius='md'
    color='white'
    backgroundColor='lightblue'
    _active={{ backgroundColor: 'blue' }}
    _focus={{ boxShadow: 'outline' }}
  >
    Click me
  </PseudoBox>

  <PseudoBox
    as='button'
    disabled
    fontWeight='semibold'
    paddingVertical={2}
    paddingHorizontal={4}
    borderRadius='md'
    color='white'
    backgroundColor='teal'
    _active={{ backgroundColor: 'blue' }}
    _focus={{ boxShadow: 'outline' }}
    _disabled={{ backgroundColor: 'disabled-bg' }}
  >
    I'm diabled
  </PseudoBox>
</Stack>;
```

### Visited

Add the `_visited` props to style a link that has been visited.

```jsx
import Stack from '../Stack';

<Stack>
  <PseudoBox as='a' href='/radio' color='blue' textDecoration='underline' fontWeight='semibold'>
    Unvisited Link
  </PseudoBox>
  <PseudoBox
    as='a'
    href='/pseudobox'
    color='blue.600'
    textDecoration='underline'
    fontWeight='semibold'
    _visited={{ color: 'purple' }}
  >
    Visited Link
  </PseudoBox>
</Stack>;
```

### First Child

Add the `_first` prefix to style an element when it is the first-child of its
parent. This is mostly useful when elements are being generated in some kind of
loop.

```jsx
import Box from '../Box';

<Box>
  {['One', 'Two', 'Three'].map(item => (
    <PseudoBox
      key={item}
      paddingHorizontal={4}
      paddingVertical={2}
      padding='4px'
      border='1px solid teal'
      _first={{ padding: '20px' }}
    >
      {item}
    </PseudoBox>
  ))}
</Box>;
```

### Last Child

Add the `_last` prefix to style an element when it is the last-child of its
parent. This is mostly useful when elements are being generated in some kind of
loop.

```jsx
import Box from '../Box';

<Box>
  {['One', 'Two', 'Three'].map(item => (
    <PseudoBox
      key={item}
      paddingHorizontal={4}
      paddingVertical={2}
      padding='4px'
      border='1px solid teal'
      _last={{ padding: '20px' }}
    >
      {item}
    </PseudoBox>
  ))}
</Box>;
```

### Odd Child

Add the `_odd` prop to style an element when it is the odd-child of its parent.
This is mostly useful when elements are being generated in some kind of loop.

```jsx
import Box from '../Box';

<Box borderWidth='1px' overflow='hidden'>
  {['One', 'Two', 'Three', 'Four', 'Five'].map(item => (
    <PseudoBox
      key={item}
      paddingHorizontal={4}
      paddingVertical={2}
      backgroundColor='white'
      _odd={{ backgroundColor: 'lightgray' }}
    >
      {item}
    </PseudoBox>
  ))}
</Box>;
```

### Even Child

Add the `_even` prop to style an element when it is the even-child of its
parent. This is mostly useful when elements are being generated in some kind of
loop.

```jsx
import Box from '../Box';

<Box borderWidth='1px' borderRadius='md' overflow='hidden'>
  {['One', 'Two', 'Three', 'Four', 'Five'].map(item => (
    <PseudoBox
      key={item}
      paddingHorizontal={4}
      paddingVertical={2}
      backgroundColor='white'
      _even={{ backgroundColor: 'lightgray' }}
    >
      {item}
    </PseudoBox>
  ))}
</Box>;
```

### Group Hover

If you need to style a child element when hovering over a specific parent
element, add the `role="group"` attribute to the parent element, then you can
use `_groupHover` prop to style the child element.

```jsx
<PseudoBox
  role='group'
  maxWidth='500px'
  overflow='hidden'
  borderRadius='md'
  padding={5}
  cursor='pointer'
  backgroundColor='white'
  boxShadow='md'
  _hover={{ backgroundColor: 'blue' }}
>
  <PseudoBox
    fontWeight='semibold'
    fontSize='lg'
    marginBottom={1}
    color='gray'
    _groupHover={{ color: 'white' }}
  >
    New Project
  </PseudoBox>
  <PseudoBox color='darkgray' marginBottom={2} _groupHover={{ color: 'white' }}>
    Create a new project from a variety of starting templates.
  </PseudoBox>
</PseudoBox>
```
