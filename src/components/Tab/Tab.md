Props https://reactstrap.github.io/components/tabs/

Basic Example

```js
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import cx from 'classnames';
const [activeTab, setActiveTab] = React.useState('1');
const toggle = tab => {
  if (activeTab !== tab) setActiveTab(tab);
};

<>
  <Nav tabs>
    <NavItem>
      <NavLink
        className={cx({ active: activeTab === '1' })}
        onClick={() => {
          toggle('1');
        }}
      >
        Overview
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink
        className={cx({ active: activeTab === '2' })}
        onClick={() => {
          toggle('2');
        }}
      >
        Value
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink
        className={cx({ active: activeTab === '3' })}
        onClick={() => {
          toggle('3');
        }}
      >
        Stakeholders
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink
        className={cx({ active: activeTab === '4' })}
        onClick={() => {
          toggle('4');
        }}
      >
        Decisions
      </NavLink>
    </NavItem>
  </Nav>
  <TabContent activeTab={activeTab}>
    <TabPane tabId='1'>
      <div className='py-2 px-1'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis sapien porta
        porttitor congue. Nam semper justo ante, id mollis lorem vehicula at. Nunc sed placerat
        justo, at gravida nibh. Proin eu luctus urna. Morbi dignissim lorem sed iaculis ultricies.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi massa nibh, euismod nec
        molestie ac, cursus quis sem. Duis vestibulum nulla sem, eget dapibus eros tincidunt non.
        Nunc congue, lacus sit amet commodo iaculis, nibh ex semper sem, eu luctus lorem ipsum a
        risus. Nullam non diam bibendum, dignissim lectus et, ultrices lacus. Pellentesque habitant
        morbi tristique senectus et netus et malesuada fames ac turpis egestas.
      </div>
    </TabPane>
    <TabPane tabId='2'>
      <div className='py-2 px-1'>
        <p>
          Nunc ut urna pulvinar, iaculis leo vitae, tincidunt lectus. Aliquam sodales arcu
          condimentum dui tincidunt efficitur. Vestibulum egestas eu enim nec volutpat. Duis
          vestibulum, nunc feugiat efficitur efficitur, magna eros imperdiet velit, id rutrum neque
          nunc et purus. Nulla a rhoncus felis, non aliquet sapien. Duis viverra, mi quis semper
          condimentum, augue dolor semper leo, vel pellentesque elit mi venenatis magna. Phasellus
          in semper augue, nec semper magna. Vestibulum dictum dignissim elit, eget interdum sem
          ornare ut. Pellentesque vitae tincidunt dui, sed sodales lectus. In ornare vestibulum quam
          et pretium. Sed elementum arcu in urna suscipit vulputate. Aenean at placerat elit,
          volutpat hendrerit nulla. Mauris non dapibus dui. Morbi a eros nunc. Nulla facilisi.
          Vestibulum tincidunt sollicitudin est bibendum mollis.
        </p>
        <p>
          Vestibulum quis sapien in ante consectetur volutpat auctor sit amet est. Suspendisse
          potenti. Fusce et massa facilisis, convallis purus at, placerat quam. Sed vitae sem
          venenatis, efficitur tortor at, convallis augue. Curabitur luctus dapibus efficitur.
          Vivamus scelerisque nibh id ullamcorper venenatis. Nam vitae magna lectus. Morbi neque
          felis, venenatis vitae lectus eget, lobortis aliquam quam. Nam lobortis congue semper.
          Donec ornare dictum dolor eu convallis. Vestibulum tempor tellus velit, a viverra sapien
          pulvinar vitae.
        </p>
      </div>
    </TabPane>
    <TabPane tabId='3'>
      <div className='py-2 px-1'>
        <p> Stakeholders Tab content </p>
      </div>
    </TabPane>
    <TabPane tabId='4'>
      <div className='py-2 px-1'>
        <p> Decisions Tab content </p>
      </div>
    </TabPane>
  </TabContent>
</>;
```

with red notification

```js
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import cx from 'classnames';
const [activeTab, setActiveTab] = React.useState('1');
const toggle = tab => {
  if (activeTab !== tab) setActiveTab(tab);
};

<div>
  <Nav tabs>
    <NavItem>
      <NavLink
        className={cx({ active: activeTab === '1' })}
        onClick={() => {
          toggle('1');
        }}
      >
        Profile
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink
        className={cx({ active: activeTab === '2' })}
        onClick={() => {
          toggle('2');
        }}
      >
        Events
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink
        className={cx({ active: activeTab === '3' })}
        onClick={() => {
          toggle('3');
        }}
      >
        Teams
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink
        className={cx({ active: activeTab === '4' })}
        onClick={() => {
          toggle('4');
        }}
      >
        Notifications <span className='notification-red-oval' />
      </NavLink>
    </NavItem>
  </Nav>
  <TabContent activeTab={activeTab}>
    <TabPane tabId='1'>
      <div className='py-2 px-1'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis sapien porta
        porttitor congue. Nam semper justo ante, id mollis lorem vehicula at. Nunc sed placerat
        justo, at gravida nibh. Proin eu luctus urna. Morbi dignissim lorem sed iaculis ultricies.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi massa nibh, euismod nec
        molestie ac, cursus quis sem. Duis vestibulum nulla sem, eget dapibus eros tincidunt non.
        Nunc congue, lacus sit amet commodo iaculis, nibh ex semper sem, eu luctus lorem ipsum a
        risus. Nullam non diam bibendum, dignissim lectus et, ultrices lacus. Pellentesque habitant
        morbi tristique senectus et netus et malesuada fames ac turpis egestas.
      </div>
    </TabPane>
    <TabPane tabId='2'>
      <div className='py-2 px-1'>
        <p>
          Nunc ut urna pulvinar, iaculis leo vitae, tincidunt lectus. Aliquam sodales arcu
          condimentum dui tincidunt efficitur. Vestibulum egestas eu enim nec volutpat. Duis
          vestibulum, nunc feugiat efficitur efficitur, magna eros imperdiet velit, id rutrum neque
          nunc et purus. Nulla a rhoncus felis, non aliquet sapien. Duis viverra, mi quis semper
          condimentum, augue dolor semper leo, vel pellentesque elit mi venenatis magna. Phasellus
          in semper augue, nec semper magna. Vestibulum dictum dignissim elit, eget interdum sem
          ornare ut. Pellentesque vitae tincidunt dui, sed sodales lectus. In ornare vestibulum quam
          et pretium. Sed elementum arcu in urna suscipit vulputate. Aenean at placerat elit,
          volutpat hendrerit nulla. Mauris non dapibus dui. Morbi a eros nunc. Nulla facilisi.
          Vestibulum tincidunt sollicitudin est bibendum mollis.
        </p>
        <p>
          Vestibulum quis sapien in ante consectetur volutpat auctor sit amet est. Suspendisse
          potenti. Fusce et massa facilisis, convallis purus at, placerat quam. Sed vitae sem
          venenatis, efficitur tortor at, convallis augue. Curabitur luctus dapibus efficitur.
          Vivamus scelerisque nibh id ullamcorper venenatis. Nam vitae magna lectus. Morbi neque
          felis, venenatis vitae lectus eget, lobortis aliquam quam. Nam lobortis congue semper.
          Donec ornare dictum dolor eu convallis. Vestibulum tempor tellus velit, a viverra sapien
          pulvinar vitae.
        </p>
      </div>
    </TabPane>
    <TabPane tabId='3'>
      <div className='py-2 px-1'>
        <p> Teams Tab content </p>
      </div>
    </TabPane>
    <TabPane tabId='4'>
      <div className='py-2 px-1'>
        <p> Notifications Tab content </p>
      </div>
    </TabPane>
  </TabContent>
</div>;
```

with superscript/exponent

```js
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import cx from 'classnames';
const [activeTab, setActiveTab] = React.useState('1');
const toggle = tab => {
  if (activeTab !== tab) setActiveTab(tab);
};

<div>
  <Nav tabs>
    <NavItem>
      <NavLink
        className={cx({ active: activeTab === '1' })}
        onClick={() => {
          toggle('1');
        }}
      >
        Events
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink
        className={cx({ active: activeTab === '2' })}
        onClick={() => {
          toggle('2');
        }}
      >
        Ideas <span className='tab-nav-link-exponent'>(121)</span>
      </NavLink>
    </NavItem>
  </Nav>
  <TabContent activeTab={activeTab}>
    <TabPane tabId='1'>
      <div className='py-2 px-1'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis sapien porta
        porttitor congue. Nam semper justo ante, id mollis lorem vehicula at. Nunc sed placerat
        justo, at gravida nibh. Proin eu luctus urna. Morbi dignissim lorem sed iaculis ultricies.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi massa nibh, euismod nec
        molestie ac, cursus quis sem. Duis vestibulum nulla sem, eget dapibus eros tincidunt non.
        Nunc congue, lacus sit amet commodo iaculis, nibh ex semper sem, eu luctus lorem ipsum a
        risus. Nullam non diam bibendum, dignissim lectus et, ultrices lacus. Pellentesque habitant
        morbi tristique senectus et netus et malesuada fames ac turpis egestas.
      </div>
    </TabPane>
    <TabPane tabId='2'>
      <div className='py-2 px-1 h3'>
        <p>
          Nunc ut urna pulvinar, iaculis leo vitae, tincidunt lectus. Aliquam sodales arcu
          condimentum dui tincidunt efficitur. Vestibulum egestas eu enim nec volutpat. Duis
          vestibulum, nunc feugiat efficitur efficitur, magna eros imperdiet velit, id rutrum neque
          nunc et purus. Nulla a rhoncus felis, non aliquet sapien. Duis viverra, mi quis semper
          condimentum, augue dolor semper leo, vel pellentesque elit mi venenatis magna.
        </p>
        <p>
          Vestibulum quis sapien in ante consectetur volutpat auctor sit amet est. Suspendisse
          potenti. Fusce et massa facilisis, convallis purus at, placerat quam. Sed vitae sem
          venenatis, efficitur tortor at, convallis augue. Curabitur luctus dapibus efficitur.
          Vivamus scelerisque nibh id ullamcorper venenatis. Nam vitae magna lectus. Morbi neque
          felis, venenatis vitae lectus eget, lobortis aliquam quam. Nam lobortis congue semper.
          Donec ornare dictum dolor eu convallis. Vestibulum tempor tellus velit, a viverra sapien
          pulvinar vitae.
        </p>
      </div>
    </TabPane>
  </TabContent>
</div>;
```
