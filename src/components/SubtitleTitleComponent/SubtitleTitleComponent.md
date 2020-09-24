```jsx
import { FlexBox } from '../';

{
  /*<FlexBox>
  <SubtitleTitleComponent title='cost savings' subtitle='sales' />
  <SubtitleTitleComponent title='automation' subtitle='fleet' />
  <SubtitleTitleComponent title='status' subtitle='at risk' subtitleColor='#ffb300' />
  <SubtitleTitleComponent title='variance' subtitle='- $20k' />
  <SubtitleTitleComponent title='plan' subtitle='Jan 2019' />
  <SubtitleTitleComponent title='actual' subtitle='Jan 2021' />
</FlexBox>; */
}

<SubtitleTitleComponent title='cost savings' subtitle='sales' />;
```

with `useBar` and `barColor`

```jsx
import { FlexBox } from '../';

// <FlexBox>
//   <SubtitleTitleComponent title='cost savings' subtitle='sales' useBar />
//   <SubtitleTitleComponent title='automation' subtitle='fleet' useBar />
//   <SubtitleTitleComponent title='value' subtitle='$10 million' useBar barColor='#01ff1f' />
//   <SubtitleTitleComponent title='risk' subtitle='medium' useBar barColor='#ff9684' />
// </FlexBox>;
<SubtitleTitleComponent title='value' subtitle='$10 million' useBar barColor='#01ff1f' />;
```

with `titleColor` and `subtitleColor`

```jsx
import { FlexBox } from '../';

<SubtitleTitleComponent
  title='cost savings'
  subtitle='sales'
  titleColor='error'
  subtitleColor='purple'
/>;
```

with `titleFontSize` and `subtitleFontSize`

```jsx
import { FlexBox } from '../';

<SubtitleTitleComponent
  title='cost savings'
  subtitle='sales'
  subtitleFontSize='12px'
  titleFontSize='14px'
/>;
```

with `titleFontWeight` and `subtitleFontWeight`

```jsx
import { FlexBox } from '../';

<SubtitleTitleComponent
  title='cost savings'
  subtitle='sales'
  titleFontWeight='bold'
  subtitleFontWeight='bold'
/>;
```
