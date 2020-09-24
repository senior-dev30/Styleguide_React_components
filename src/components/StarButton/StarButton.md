Basic Example

```
<StarButton />
```

`active` variant

```
<StarButton isLiked={true} />
```

`size` modifications

```jsx
import FlexBox from '../FlexBox';
import Box from '../Box';

<FlexBox justifyContent='space-between' alignItems='flex-end'>
  {[24, 32, 40, 48, 56, 72, 80].map(size => (
    <Box style={{ display: 'inline-block' }}>
      <StarButton size={size + 'px'} />
      <Box style={{ textAlign: 'center' }}>{size}px</Box>
    </Box>
  ))}
</FlexBox>;
```

`onLike` & `onDislike` callback functions

```jsx
<StarButton onLike={() => alert('triggered like!')} onDislike={() => alert('triggered dislike!')} />
```
