`fontFamily` variants

```jsx
import { Box } from '../';
<div>
  <Box>
    <h6>Avenir Next LT Pro</h6>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempor lorem massa, a
      viverra ligula luctus id. Aliquam eget ornare ligula.
    </p>
  </Box>
  <Box fontFamily='Rubik'>
    <h6>Rubik</h6>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempor lorem massa, a
      viverra ligula luctus id. Aliquam eget ornare ligula.
    </p>
  </Box>
</div>;
```

`fontWeight` variants

```jsx
import { Box } from '../';
<div>
  <Box fontFamily='Avenir Next LT Pro' fontWeight={400}>
    <h6>fontWeight='400'</h6>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempor lorem massa, a
      viverra ligula luctus id. Aliquam eget ornare ligula.
    </p>
  </Box>
  <Box fontFamily='Avenir Next LT Pro' fontWeight={600}>
    <h6>fontWeight='600'</h6>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempor lorem massa, a
      viverra ligula luctus id. Aliquam eget ornare ligula.
    </p>
  </Box>
  <Box fontFamily='Avenir Next LT Pro' fontWeight={700}>
    <h6>fontWeight='700'</h6>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempor lorem massa, a
      viverra ligula luctus id. Aliquam eget ornare ligula.{' '}
    </p>
  </Box>
</div>;
```

`fontStyle` variant

```jsx
import { Box } from '../';
<div>
  <Box>
    <h6>fontStyle='italic'</h6>
    <Box as='p' fontStyle='italic'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempor lorem massa, a
      viverra ligula luctus id. Aliquam eget ornare ligula.
    </Box>
  </Box>
</div>;
```

`color` variants

```jsx padded
import { Box, FlexBox, BOOTSTRAP_THEME_COLORS } from '../';

<FlexBox justifyContent='space-between' alignItems='flex-end'>
  {BOOTSTRAP_THEME_COLORS.map(color => (
    <Box color={color} key={color}>
      <h6>color='{color}'</h6>
      <Box as='p' fontSize='14px'>
        Lorem ipsum sit amet, consectetur adipiscing elit. Suspendisse tempor lorem massa, a viverra
      </Box>
    </Box>
  ))}
</FlexBox>;
```
