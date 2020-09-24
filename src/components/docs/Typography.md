`fontFamily` variants

```jsx
import { Box } from '../';
<div>
  <Box as='p'>
    <h6>Avenir Next LT Pro</h6>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempor lorem massa, a viverra
    ligula luctus id. Aliquam eget ornare ligula.
  </Box>
  <Box as='p' fontFamily='Rubik'>
    <h6>Rubik</h6>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempor lorem massa, a viverra
    ligula luctus id. Aliquam eget ornare ligula.
  </Box>
</div>;
```

`fontWeight` variants

```jsx
import { Box } from '../';
<div>
  <Box as='p' fontFamily='Rubik' fontWeight={300}>
    <h6>fontWeight='300'</h6>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempor lorem massa, a viverra
    ligula luctus id. Aliquam eget ornare ligula.
  </Box>

  <Box as='p' fontFamily='Rubik' fontWeight={400}>
    <h6>fontWeight='400'</h6>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempor lorem massa, a viverra
    ligula luctus id. Aliquam eget ornare ligula.
  </Box>
</div>;
```

`color` variants

```jsx padded
import { Box, FlexBox, BOOTSTRAP_THEME_COLORS } from '../';

<FlexBox justifyContent='space-between' alignItems='flex-end'>
  {BOOTSTRAP_THEME_COLORS.map(color => (
    <Box as='p' color={color}>
      <h6>{color}</h6>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempor lorem massa, a viverra
    </Box>
  ))}
</FlexBox>;
```
