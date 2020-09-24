`InputTextArea` is like `FormGroupWithInputText` but with additional props of `cols` and `rows`.

Basic example

```
<InputTextArea />
```

with `placeholder`

```
<InputTextArea placeholder='Placeholder text' />
```

with `label`

```js
import { FormGroup, Label } from '../';

<FormGroup>
  <Label>Address</Label>
  <InputTextArea label='Input Address' />
</FormGroup>;
```

with `defaultValue`

```
<InputTextArea defaultValue='Text box text' />
```

with `invalid`

```js
import { Box, FormGroup } from '../';

<FormGroup>
  <InputTextArea value='some text input' invalid />
</FormGroup>;
```

with `invalid` and error message

```js
import { FormGroup, FormFeedback } from '../';

<FormGroup>
  <InputTextArea invalid value='some text input' />
  <FormFeedback invalid>This password is not recognized</FormFeedback>
</FormGroup>;
```

with hint/text

```js
import { Box, Form, FormGroup, Label, FormFeedback, FormText } from '..';

<FormGroup>
  <Label for='exampleEmail'>Input with some help text</Label>
  <InputTextArea />
  <FormText>Example help text that remains unchanged.</FormText>
</FormGroup>;
```
