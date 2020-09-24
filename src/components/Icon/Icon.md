```jsx
import { FlexBox, Box, ICONS } from '../';

<FlexBox flexWrap='wrap'>
  {Object.entries(ICONS).map(([iconName]) => (
    <FlexBox flexBasis='100px' flexDirection='column' margin='20px' key={iconName}>
      <FlexBox justifyContent='center' marginBottom='10px'>
        <Icon icon={iconName} color='primary' className='text-center' />
      </FlexBox>
      <FlexBox as='small' justifyContent='center'>
        {iconName}
      </FlexBox>
    </FlexBox>
  ))}
</FlexBox>;
```

with `color` variants

```jsx
import { FlexBox, Box } from '../';

<FlexBox justifyContent='space-around'>
  {['primary', 'secondary', 'success', 'error', 'purple'].map(color => (
    <Box textAlign='center'>
      <Icon key={color} size={48} icon='CLOSE' color={color} />
      <div>{color}</div>
    </Box>
  ))}
</FlexBox>;
```

with `size` Variants

```jsx
import { FlexBox, Box } from '../';

<FlexBox justifyContent='space-around' alignItems='flex-end'>
  {[12, 18, 24, 32, 42, 48].map(size => (
    <Box textAlign='center'>
      <Icon key={size} icon='CLOSE' size={size} />
      <div>{size}px</div>
    </Box>
  ))}
</FlexBox>;
```
