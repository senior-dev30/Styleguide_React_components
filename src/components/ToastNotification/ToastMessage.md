`ToastMessage` is just design component for `react-toastify` message.

### Examples

```js
import Box from '../Box';
import Button from '../Button/Button';
import ToastContainerWrapper from './ToastContainerWrapper';
import { toast } from 'react-toastify';
let toastIdA = null;

<Box margin='10px' position='relative'>
  <ToastContainerWrapper containerId='A' />
  <Box marginTop='10px'>
    <Button
      size='sm'
      onClick={() => {
        // Check if toaster is already active
        if (toast.isActive(toastIdA)) {
          return;
        }

        toastIdA = toast(
          <ToastMessage
            toastText={`James was sent the oportunity. We'll keep you updated on what he says.`}
            buttonText='ok'
          />,
          {
            containerId: 'A',
            autoClose: false,
          },
        );
      }}
    >
      Show Toast
    </Button>
  </Box>
</Box>;
```

```js
import Box from '../Box';
import Button from '../Button/Button';
import ToastContainerWrapper from './ToastContainerWrapper';
import { toast } from 'react-toastify';
let toastIdB = null;

<Box margin='10px' position='relative'>
  <ToastContainerWrapper containerId='B' containerWidth='336px' />
  <Box marginTop='10px'>
    <Button
      size='sm'
      onClick={() => {
        // Check if toaster is already active
        if (toast.isActive(toastIdB)) {
          return;
        }

        toastIdB = toast(
          <ToastMessage
            toastText={`You’ve assigned 23/30 decision managers. 🙂Want to do the last 7 now?`}
            buttonText='assign decision managers'
          />,
          {
            containerId: 'B',
            autoClose: false,
          },
        );
      }}
    >
      Show Toast
    </Button>
  </Box>
</Box>;
```

with `onButtonClick` callback

```js
import Box from '../Box';
import Button from '../Button/Button';
import ToastContainerWrapper from './ToastContainerWrapper';
import { toast } from 'react-toastify';
let toastIdC = null;

<Box margin='10px' position='relative'>
  <ToastContainerWrapper containerId='C' containerWidth='336px' />
  <Box marginTop='10px'>
    <Button
      size='sm'
      onClick={() => {
        // Check if toaster is already active
        if (toast.isActive(toastIdC)) {
          return;
        }

        toastIdC = toast(
          <ToastMessage
            toastText={`You’ve assigned 23/30 decision managers. 🙂Want to do the last 7 now?`}
            buttonText='click me'
            onButtonClick={() => alert('onButtonClick callback')}
          />,
          {
            containerId: 'C',
            autoClose: false,
          },
        );
      }}
    >
      Show Toast
    </Button>
  </Box>
</Box>;
```
