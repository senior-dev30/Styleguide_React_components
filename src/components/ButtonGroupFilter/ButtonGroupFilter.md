with `variant='default'`

```jsx
import cx from 'classnames';
const [selected, setSelected] = React.useState('Upcoming');

<div>
  <ButtonGroupFilter>
    <button
      className={cx({ active: selected === 'Upcoming' })}
      onClick={() => setSelected('Upcoming')}
    >
      Upcoming
    </button>
    <button
      className={cx({ active: selected === 'Invitations' })}
      onClick={() => setSelected('Invitations')}
    >
      Invitations
    </button>
    <button className={cx({ active: selected === 'Past' })} onClick={() => setSelected('Past')}>
      Past
    </button>
  </ButtonGroupFilter>
</div>;
```

with `variant='outline'`

```jsx
import cx from 'classnames';
const [filter, setSelected] = React.useState('label1');

<ButtonGroupFilter variant='outline'>
  <button className={cx({ active: filter === 'label1' })} onClick={() => setSelected('label1')}>
    label1
  </button>
  <button className={cx({ active: filter === 'label2' })} onClick={() => setSelected('label2')}>
    label2
  </button>
  <button className={cx({ active: filter === 'label3' })} onClick={() => setSelected('label3')}>
    label3
  </button>
</ButtonGroupFilter>;
```

with `variant='purple-solid'`

**WIP** Not sure if we'll be using this design but keeping it here for now, just in case

```jsx
import cx from 'classnames';
const [filter, setSelected] = React.useState('Cost Saving');
<div>
  <ButtonGroupFilter variant='purple-solid'>
    <button
      className={cx({ active: filter === 'Cost Saving' })}
      onClick={() => setSelected('Cost Saving')}
    >
      Cost Saving
    </button>
    <button
      className={cx({ active: filter === 'Revenue Generating' })}
      onClick={() => setSelected('Revenue Generating')}
    >
      Revenue Generating
    </button>
  </ButtonGroupFilter>
</div>;
```
