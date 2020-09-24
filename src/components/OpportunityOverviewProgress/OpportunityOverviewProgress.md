Opportunity Card design

```jsx
import { Box, FlexBox } from '../';

<FlexBox flexDirection='column' width='250px'>
  <OpportunityOverviewProgress
    titleFlexBasis='98px'
    titleFontSize='14px'
    title='Value'
    completedCount={4}
    totalCount={7}
  />
  <OpportunityOverviewProgress
    titleFlexBasis='98px'
    titleFontSize='14px'
    title='Stakeholders'
    completedCount={5}
    totalCount={7}
    wrapperBoxProps={{
      marginTop: '22px',
    }}
  />
  <OpportunityOverviewProgress
    titleFlexBasis='98px'
    titleFontSize='14px'
    title='Agreement'
    completedCount={8}
    totalCount={10}
    wrapperBoxProps={{
      marginTop: '22px',
    }}
  />
</FlexBox>;
```

Opportunity Overriew progress design

```jsx
import { Box, FlexBox } from '../';

<FlexBox
  flexDirection='column'
  width='648px'
  boxShadow='0 1px 7px 0 #dbe4f3'
  paddingLeft='40px'
  paddingRight='35px'
  padding='38px'
>
  <OpportunityOverviewProgress
    title='Value'
    titleFontSize='18px'
    titleFlexBasis='122px'
    completedCount={4}
    totalCount={7}
    showCompleteText
  />
  <OpportunityOverviewProgress
    title='Stakeholders'
    titleFontSize='18px'
    titleFlexBasis='122px'
    completedCount={5}
    totalCount={7}
    showCompleteText
    wrapperBoxProps={{
      marginTop: '56px',
    }}
  />
  <OpportunityOverviewProgress
    title='Agreement'
    titleFontSize='18px'
    titleFlexBasis='122px'
    completedCount={8}
    totalCount={10}
    showCompleteText
    wrapperBoxProps={{
      marginTop: '56px',
    }}
  />
</FlexBox>;
```
