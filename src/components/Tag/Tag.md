```
const [isSelected, toggleSelection] = React.useState(false);

<Tag isSelected={isSelected} toggleSelection={toggleSelection}/>
```

```jsx
import { FlexBox } from '../';
const [tags, setTags] = React.useState([
  { tag: 'label', selection: false },
  { tag: 'sports', selection: true },
  { tag: 'happiness', selection: true },
  { tag: 'univers', selection: false },
  { tag: 'belief', selection: true },
  { tag: 'tranquility', selection: true },
]);

<FlexBox width='600px' justifyContent='space-around'>
  {tags.map(tag => (
    <Tag
      isSelected={tag.selection}
      tag={tag.tag}
      toggleSelection={selection =>
        setTags(_tags => {
          return _tags.map(_tag => {
            if (_tag.tag === tag.tag) return { ..._tag, selection: selection };

            return _tag;
          });
        })
      }
    />
  ))}
</FlexBox>;
```
