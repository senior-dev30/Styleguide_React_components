The component is based on the existing basic `Input`.

For more information on the `props`, please check the above.

---

grouped example

```jsx
import { Box, FormGroup, Icon, InputGroup, InputLeftElement } from '../';

<Box width='429px'>
  <FormGroup>
    <Box>
      <InputGroup>
        <InputLeftElement width='59px'>
          <Icon icon='LOCATION' color='secondary' size='24px' />
        </InputLeftElement>
        <InputFloating placeholder='Location' />
      </InputGroup>
    </Box>
  </FormGroup>

  <FormGroup>
    <Box>
      <InputGroup>
        <InputLeftElement width='59px'>
          <Icon icon='VIDEO_CAMERA' color='secondary' size='24px' />
        </InputLeftElement>
        <InputFloating placeholder='Enter Virtual Meeting Link (optional)' />
      </InputGroup>
    </Box>
  </FormGroup>
</Box>;
```

with `location` icon

```jsx
import { Icon, InputGroup, InputLeftElement } from '../';

<InputGroup>
  <InputLeftElement width='59px'>
    <Icon icon='LOCATION' color='secondary' size='24px' />
  </InputLeftElement>
  <InputFloating placeholder='Location' />
</InputGroup>;
```

with `camera` icon

```jsx
import { Icon, InputGroup, InputLeftElement } from '../';

<InputGroup>
  <InputLeftElement width='59px'>
    <Icon icon='VIDEO_CAMERA' color='secondary' size='24px' />
  </InputLeftElement>
  <InputFloating placeholder='Enter Virtual Meeting Link (optional)' />
</InputGroup>;
```
