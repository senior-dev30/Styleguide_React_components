`VisuallyHidden` is a common techinique used in web accessibility to hide content
from the visual client, but keep it readable for screen readers.

##### Accessibility

`VisuallyHidden` has all the styles necessary to hide it from visual clients, but
keep it for screen readers.

## Props

This component doesn't have any custom props.

| Name       | Type              | Description                       |
| ---------- | ----------------- | --------------------------------- |
| `children` | `React.ReactNode` | The content to be hidden visually |

---

## Examples

Example

```jsx
import { Button, Icon } from '../';

<Button>
  <VisuallyHidden>Checkmark</VisuallyHidden>
  <Icon icon='CLOSE' color='white' />
</Button>;
```

Another Example

```jsx
import { Button, Icon, Box } from '../';

<Box>
  <h2>Title and description</h2>
  <VisuallyHidden>This will be hidden</VisuallyHidden>
</Box>;
```
