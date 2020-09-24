Basic Example

```jsx
import { FlexBox } from '../';

<Avatar
  userImageUrl='https://imgbbb.com/images/2020/01/16/9.jpg'
  userProfileUrl='/docz-mock-url/user-profile-url'
  size='64px'
  borderRadius={8}
/>;
```

`size` variants

```jsx padded
import { Box, FlexBox } from '../';
<FlexBox justifyContent='space-between' alignItems='flex-end'>
  {[24, 32, 40, 48, 56, 72, 80].map(size => (
    <Box style={{ display: 'inline-block' }}>
      <Avatar
        userImageUrl='https://imgbbb.com/images/2020/01/16/9.jpg'
        userProfileUrl='/docz-mock-url/user-profile-url'
        size={size + 'px'}
      />
      <Box style={{ textAlign: 'center' }}>{size}px</Box>
    </Box>
  ))}
</FlexBox>;
```

`shadowColor` variants

```jsx padded
import { Box, FlexBox } from '../';

<FlexBox justifyContent='space-between' alignItems='flex-end'>
  {['primary', 'secondary', 'success', 'error', 'purple'].map(color => (
    <Box style={{ display: 'inline-block' }}>
      <Avatar
        userImageUrl='https://imgbbb.com/images/2020/01/16/9.jpg'
        userProfileUrl='/docz-mock-url/user-profile-url'
        size='100px'
        borderRadius={25}
        shadowColor={color}
      />

      <Box style={{ textAlign: 'center' }}> {color} </Box>
    </Box>
  ))}
</FlexBox>;
```
