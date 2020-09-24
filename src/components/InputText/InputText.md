Basic Example

```
<InputText />
```

with `label`

```
import { FormGroup, Label } from '../';

<FormGroup>
  <Label>Input Field Label</Label>
  <InputText label='Input Address' />
</FormGroup>;
```

with `placeholder`

```
<InputText placeholder='Input Placeholder' />
```

with `defaultValue`

```
<InputText label='Input Field' placeholder='Input Placeholder' defaultValue='Input text'/>
```

with `disabled`

```
<InputText disabled />
```

with `disabled` and `value`

```
<InputText disabled value='Input Field'/>
```

with `invalid`

```
<InputText label='Input Field' invalid/>
```

with `invalid` and error message

```
import { FormGroup, Label, FormFeedback } from '../';

<FormGroup>

<InputText label='Input Field' invalid />
<FormFeedback invalid>This Field is Invalid</FormFeedback>
</FormGroup>
```

with `hint`

```js
import { Box, Form, FormGroup, Label, FormFeedback, FormText } from '..';

<FormGroup>
  <Label for='exampleEmail'>Zip Code</Label>
  <InputText placeholder='xxxxx' />
  <FormText>Type 5 digit Zip Code of your city</FormText>
</FormGroup>;
```

with `onChange` callback

```
<InputText label='Input Field' placeholder='Input Placeholder' onChange={(event) => {
	alert(`You Typed: ${event.target.value}`)
	event.stopPropagation()
}
}/>
```

with `onFocus` callback

```
<InputText label='Input Field' placeholder='Input Placeholder' onFocus={(event) => {alert(`You Focused`)
event.stopPropagation()
}}/>
```

with `onBlur` callback

```
<InputText label='Input Field' placeholder='Input Placeholder' onBlur={(event) => {
	alert(`You Blured`)
	event.stopPropagation()
	}}/>
```

Implementing without labels example from Form Elements

```
import { Box } from '../';

<Box width='340px'>
	<InputText placeholder='Input Placeholder' />
	<InputText value='Input text' />
	<InputText value='input field in focus' />
	<InputText value='Input Error' invalid />
	<InputText value='Disabled Input' disabled />
</Box>
```

Implementing example from Form Elements

```
import { Box } from '../';

<Box width='340px'>

	<InputText label='Input Field' placeholder='Input Placeholder'/>
	<InputText label='Enter Name' defaultValue='Input Text' />
</Box>
```
