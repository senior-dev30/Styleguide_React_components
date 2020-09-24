Basic Example

```jsx padded
import { FlexBox } from '../';

<FlexBox justifyContent='space-between'>
  <Button color='primary'>primary</Button>
  <Button color='secondary'>secondary</Button>
  <Button color='success'>success</Button>
  <Button color='error'>error</Button>
  <Button color='purple'>purple</Button>
  <Button color='primary' disabled>
    disabled
  </Button>
</FlexBox>;
```

with `outline`

```jsx padded
import { FlexBox } from '../';

<FlexBox justifyContent='space-between'>
  <Button color='primary' outline>
    primary
  </Button>
  <Button color='secondary' outline>
    secondary
  </Button>
  <Button color='success' outline>
    success
  </Button>
  <Button color='error' outline>
    error
  </Button>
  <Button color='purple' outline>
    purple
  </Button>
  <Button color='primary' outline disabled>
    disabled
  </Button>
</FlexBox>;
```

with `shadowNone`

```jsx padded
<Button color='primary' shadowNone>
  without shadow
</Button>
```

with `Link` tag of `react-router-dom`

```jsx padded
import { Link } from 'react-router-dom';

<Button tag={Link} to='/docz-mock-url/awesome'>
  primary as link
</Button>;
```

## Special Buttons

### going buttons

```jsx padded
import { Icon, FlexBox, Box } from '../';

<FlexBox justifyContent='space-around' alignItems='center'>
  <div>
    <Button color='primary' size='going' outline>
      <Icon icon='CHECK_MARK' size={18} color='primary' />
      going
    </Button>
    <Box as='p' textAlign='center'>
      color='primary'
    </Box>
  </div>
  <div>
    <Button color='secondary' size='going' outline>
      <Icon icon='CHECK_MARK' size={18} color='secondary' />
      <span> going </span>
    </Button>
    <Box as='p' textAlign='center'>
      color='secondary'
    </Box>
  </div>
</FlexBox>;
```

### can't go buttons

```jsx
import { Icon, FlexBox, Box } from '../';

<FlexBox justifyContent='space-around' alignItems='center'>
  <div>
    <Button color='error' size='cannot-go' outline>
      <Icon icon='CLOSE' size={17} color='error' />
      can't go
    </Button>
    <Box as='p' textAlign='center'>
      color='error'
    </Box>
  </div>
  <div>
    <Button color='secondary' size='cannot-go' outline>
      <Icon icon='CLOSE' size={17} color='secondary' />
      can't go
    </Button>
    <Box as='p' textAlign='center'>
      color='secondary'
    </Box>
  </div>
</FlexBox>;
```

### Accept & Setup Event button

```jsx
import { Icon } from '../';

<Button color='accept-and-setup-event'>
  Accept & Setup Event <Icon icon='ARROW_LONG' size={28} color='white' />
</Button>;
```

For more examples https://reactstrap.github.io/components/buttons/
