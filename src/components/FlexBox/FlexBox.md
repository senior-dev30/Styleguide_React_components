# FlexBox

FlexBox is `Box` with `display: flex`. It renders a `div` element by default.

## Usage

```jsx
import Text from '../Text';
import Box from '../Box';

<FlexBox alignItems='center'>
  <FlexBox backgroundColor='green' alignItems='flex-end'>
    <Text>Box 1</Text>
  </FlexBox>
  <FlexBox backgroundColor='blue' size='150px' alignItems='center' justifyContent='center'>
    <Text textAlign='center' backgroundColor='pink'>
      Box 2
    </Text>
  </FlexBox>
  <Box>
    <Text backgroundColor='tomato' color='white'>
      Box 3
    </Text>
  </Box>
</FlexBox>;
```
