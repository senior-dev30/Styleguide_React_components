<h2 style="color: red">WORK IN PROGRESS</h2>
<p>Design for DropDownItem is not available yet</p>

```js
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
const [dropdownOpen, setDropdownOpen] = React.useState(false);

const toggle = () => setDropdownOpen(prevState => !prevState);

<div>
  <div>
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle color='brown-grey' caret outline>
        label
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>Header</DropdownItem>
        <DropdownItem>Some Action</DropdownItem>
        <DropdownItem disabled>Action (disabled)</DropdownItem>
        <DropdownItem divider />
        <DropdownItem>Foo Action</DropdownItem>
        <DropdownItem>Bar Action</DropdownItem>
        <DropdownItem>Quo Action</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  </div>
</div>;
```

```js
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
const [dropdownOpen, setDropdownOpen] = React.useState(false);

const toggle = () => setDropdownOpen(prevState => !prevState);

<div>
  <div>
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle color='success' caret outline>
        label
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>Header</DropdownItem>
        <DropdownItem>Some Action</DropdownItem>
        <DropdownItem disabled>Action (disabled)</DropdownItem>
        <DropdownItem divider />
        <DropdownItem>Foo Action</DropdownItem>
        <DropdownItem>Bar Action</DropdownItem>
        <DropdownItem>Quo Action</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  </div>
</div>;
```

```js
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
const [dropdownOpen, setDropdownOpen] = React.useState(false);

const toggle = () => setDropdownOpen(prevState => !prevState);

<div>
  <div>
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle color='medium-risk' caret outline>
        label
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>Header</DropdownItem>
        <DropdownItem>Some Action</DropdownItem>
        <DropdownItem disabled>Action (disabled)</DropdownItem>
        <DropdownItem divider />
        <DropdownItem>Foo Action</DropdownItem>
        <DropdownItem>Bar Action</DropdownItem>
        <DropdownItem>Quo Action</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  </div>
</div>;
```

```js
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
const [dropdownOpen, setDropdownOpen] = React.useState(false);

const toggle = () => setDropdownOpen(prevState => !prevState);

<div>
  <div>
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle color='high-risk' caret outline>
        label
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>Header</DropdownItem>
        <DropdownItem>Some Action</DropdownItem>
        <DropdownItem disabled>Action (disabled)</DropdownItem>
        <DropdownItem divider />
        <DropdownItem>Foo Action</DropdownItem>
        <DropdownItem>Bar Action</DropdownItem>
        <DropdownItem>Quo Action</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  </div>
</div>;
```

```js
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
const [dropdownOpen, setDropdownOpen] = React.useState(false);

const toggle = () => setDropdownOpen(prevState => !prevState);

<div>
  <div>
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle color='error' caret outline>
        label
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>Header</DropdownItem>
        <DropdownItem>Some Action</DropdownItem>
        <DropdownItem disabled>Action (disabled)</DropdownItem>
        <DropdownItem divider />
        <DropdownItem>Foo Action</DropdownItem>
        <DropdownItem>Bar Action</DropdownItem>
        <DropdownItem>Quo Action</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  </div>
</div>;
```
