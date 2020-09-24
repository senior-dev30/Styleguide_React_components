`ToastContainerWrapper` is just wrapper on top of [react-toastify ToastContainer](https://github.com/fkhadra/react-toastify#usage) with customs styles and react-toastify config.

### Usage

Simply import `ToastContainerWrapper` and render `<ToastContainerWrapper />` where you want to display toaster notification.

##### Speical Note:

You need to import `toaster-toastify` styles file in your app if you haven't already.

<p> `import 'react-toastify/dist/ReactToastify.css'` </p>

### Examples

```js
import Box from '../Box';
import Button from '../Button/Button';
import { toast } from 'react-toastify';
let toastIdA = null;

<Box margin='10px'>
  <ToastContainerWrapper containerId='A' />

  <Box marginTop='10px'>
    <Button
      size='sm'
      onClick={() => {
        // Check if toaster is already active
        if (toast.isActive(toastIdA)) {
          return;
        }

        toastIdA = toast('Hello', {
          containerId: 'A',
          autoClose: false,
        });
      }}
    >
      Say Hello!
    </Button>
  </Box>
</Box>;
```

use React component as toast message

```js
import Box from '../Box';
import Button from '../Button/Button';
import { toast } from 'react-toastify';
let toastIdB = null;

const ToastMessageComponent = () => <Box fontSize='18px'>I'm ToastMessageComponent</Box>;

<Box margin='10px'>
  <ToastContainerWrapper containerId='B' />

  <Box marginTop='10px'>
    <Button
      size='sm'
      onClick={() => {
        // Check if toaster is alread active
        if (toast.isActive(toastIdB)) {
          return;
        }

        toastIdB = toast(<ToastMessageComponent />, {
          containerId: 'B',
          autoClose: false,
        });
      }}
    >
      Render React Component as toaster
    </Button>
  </Box>
</Box>;
```

with `containerWidth`

```js
import Box from '../Box';
import Button from '../Button/Button';
import { toast } from 'react-toastify';
let toastIdC = null;

<Box margin='10px'>
  <ToastContainerWrapper containerId='C' containerWidth='500px' />

  <Box marginTop='10px'>
    <Button
      size='sm'
      onClick={() => {
        // Check if toaster is alread active
        if (toast.isActive(toastIdC)) {
          return;
        }

        toastIdC = toast("With containerWidth='500px'", {
          containerId: 'C',
          autoClose: false,
        });
      }}
    >
      Show Toast
    </Button>
  </Box>
</Box>;
```
