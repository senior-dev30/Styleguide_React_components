```jsx
<div>
  value='30'
  <Progress value='30' />
</div>
```

with different `value`

```jsx
import { Box, FlexBox } from '../';

<FlexBox flexDirection='column'>
  {[25, 50, 75, 100].map(value => (
    <Box style={{ display: 'inline-block' }} marginBottom='10px' key={value}>
      <Box color='secondary'>value='{value}'</Box>
      <Progress value={value} />
    </Box>
  ))}
</FlexBox>;
```

with different `color`

```jsx
import { BOOTSTRAP_THEME_COLORS } from '..';
import { Box, FlexBox } from '../';

<FlexBox flexDirection='column'>
  {BOOTSTRAP_THEME_COLORS.map(color => (
    <Box display='inline-block' marginBottom='10px' key={color}>
      <Box color='secondary'> color='{color}' </Box>
      <Progress value='30' color={color} />
    </Box>
  ))}
</FlexBox>;
```

stakeholder-progressbar variant

```js
import Box from '../Box';
import FlexBox from '../FlexBox';

<Box width='300px'>
  <Progress value='100' className='stakeholder-progressbar' />
</Box>;
```

For more examples https://reactstrap.github.io/components/progress/
