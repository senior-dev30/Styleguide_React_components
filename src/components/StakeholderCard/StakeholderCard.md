```js
<StakeholderCard label='All Added' percentageValue='70' />
```

OpportunityOverView screen design

```js
import Box from '../Box';
import Stack from '../Stack';
import OpportunityOverViewCardBox from '../OpportunityOverViewCardBox';
import OpportunityOverViewCardBoxHeading from '../OpportunityOverViewCardBoxHeading';

<OpportunityOverViewCardBox>
  <OpportunityOverViewCardBoxHeading>Stakeholders</OpportunityOverViewCardBoxHeading>
  <Box marginLeft='32px' marginTop='33px'>
    <Stack spacing='44px'>
      <StakeholderCard label='All Added' percentageValue='70' />
      <StakeholderCard label='Ratings Submitted' percentageValue='50' />
      <StakeholderCard label='Requests Resolved' percentageValue='30' />
    </Stack>
  </Box>
</OpportunityOverViewCardBox>;
```
