Stack is a layout utility component that makes it easy to stack elements together and apply a space between them. It composes the Flex component.

Stack clones it's `children` and add `marginBottom` OR wrap children in `Box` and pass the `marginBottom` prop to wrapper `Box`.

```js
import Box from '../Box';

<Stack spacing='32px'>
  <Box
    padding='24px'
    boxShadow='0 8px 5px 0 rgba(0, 0, 0, 0.03), 0 2px 4px 0 rgba(0, 0, 0, 0.5)'
    borderWidth='1px'
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempor lorem massa, a
    viverra ligula luctus id. Aliquam eget ornare ligula.
  </Box>
  <Box
    padding='24px'
    boxShadow='0 8px 5px 0 rgba(0, 0, 0, 0.03), 0 2px 4px 0 rgba(0, 0, 0, 0.5)'
    borderWidth='1px'
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempor lorem massa, a
    viverra ligula luctus id. Aliquam eget ornare ligula.
  </Box>
  <Box
    padding='24px'
    boxShadow='0 8px 5px 0 rgba(0, 0, 0, 0.03), 0 2px 4px 0 rgba(0, 0, 0, 0.5)'
    borderWidth='1px'
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempor lorem massa, a
    viverra ligula luctus id. Aliquam eget ornare ligula.
  </Box>
</Stack>;
```
