```js
import { Box, FormGroup } from '../';

<Box width='320px'>
  <FormGroup>
    <InputPassword />
  </FormGroup>
</Box>;
```

with `placeholder`

```js
import { Box, FormGroup } from '../';

<Box width='320px'>
  <FormGroup>
    <InputPassword placeholder='Input Password' />
  </FormGroup>
</Box>;
```

with `label`

```js
import { Box, FormGroup, Label } from '../';

<Box width='320px'>
  <FormGroup>
    <Label>Password</Label>
    <InputPassword label='Input Password' />
  </FormGroup>
</Box>;
```

with `value`

```js
import { Box, FormGroup } from '../';

<Box width='320px'>
  <FormGroup>
    <InputPassword value='ITS_A_SECRET' />
  </FormGroup>
</Box>;
```

with `invalid`

```js
import { Box, FormGroup } from '../';

<Box width='320px'>
  <FormGroup>
    <InputPassword value='P@$$W0RD1235' invalid />
  </FormGroup>
</Box>;
```

with `invalid` and error message

```js
import { Box, Input, FormGroup, FormFeedback } from '../';

<Box width='320px'>
  <FormGroup>
    <InputPassword value='P@$$W0RD1235' invalid />
    <FormFeedback invalid>This password is not recognized</FormFeedback>
  </FormGroup>
</Box>;
```

with hint/text

```js
import { Box, Form, FormGroup, Label, FormFeedback, FormText } from '..';

<Box width='320px'>
  <Form>
    <FormGroup>
      <Label for='exampleEmail'>Input without validation</Label>
      <InputPassword />
      <FormText>Example help text that remains unchanged.</FormText>
    </FormGroup>
    {/*
	<FormGroup>
    <Label for='exampleEmail'>Valid input</Label>
    <Input valid />
    <FormFeedback valid>Sweet! that name is available</FormFeedback>
    <FormText>Example help text that remains unchanged.</FormText>
  </FormGroup>

  <FormGroup>
    <Label for='examplePassword'>Invalid input</Label>
    <Input invalid />
    <FormFeedback>Oh noes! that name is already taken</FormFeedback>
    <FormText>Example help text that remains unchanged.</FormText>
	</FormGroup>

  <FormGroup>
    <Label for='exampleEmail'>Input without validation</Label>
    <Input />
    <FormFeedback tooltip>You will not be able to see this</FormFeedback>
    <FormText>Example help text that remains unchanged.</FormText>
	</FormGroup>

  <FormGroup>
    <Label for='exampleEmail'>Valid input</Label>
    <Input valid />
    <FormFeedback valid tooltip>
      Sweet! that name is available
    </FormFeedback>
    <FormText>Example help text that remains unchanged.</FormText>
	</FormGroup>
    <FormGroup>
      <Label for='examplePassword'>Invalid input</Label>
      <Input invalid />
      <FormFeedback tooltip>Oh noes! that name is already taken</FormFeedback>
      <FormText>Example help text that remains unchanged.</FormText>
    </FormGroup>
*/}
  </Form>
</Box>;
```

implementing example from Form Elements

```js
import { Box, FormGroup, FormFeedback } from '../';

<Box width='320px'>
  <FormGroup>
    <InputPassword label='Password' value='P@$$W0RD1235' />
  </FormGroup>

  <FormGroup>
    <InputPassword label='Password' value='P@$$W0RD1235' />
  </FormGroup>

  <FormGroup>
    <InputPassword label='Password' value='P@$$W0RD1235' invalid />
    <FormFeedback>This password is not recognized</FormFeedback>
  </FormGroup>
</Box>;
```
