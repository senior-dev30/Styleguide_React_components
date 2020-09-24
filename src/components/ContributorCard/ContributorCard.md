```js
<ContributorCard
  title='Michelle Williams'
  subtitle='4 projects - 88% complete'
  positionNumber={1}
  avatarProps={{
    userImageUrl: 'https://monosnap.com/image/G3KnCrR5dUmboLWXCJahOUD4KfJTLi',
    userProfileUrl: '/docz-mock-url/user-profile-url',
  }}
/>
```

```js
import Stack from '../Stack';
import Box from '../Box';
import { TextRubik } from '../Text';
import OpportunityOverViewCardBox from '../OpportunityOverViewCardBox';
import OpportunityOverViewCardBoxHeading from '../OpportunityOverViewCardBoxHeading';

<OpportunityOverViewCardBox>
  <OpportunityOverViewCardBoxHeading>Top Contributors</OpportunityOverViewCardBoxHeading>
  <Box paddingLeft='25px'>
    <Stack spacing='18px'>
      <ContributorCard
        title='Michelle Williams'
        subtitle='4 projects - 88% complete'
        positionNumber={1}
        avatarProps={{
          userImageUrl: 'https://imgbbb.com/images/2020/01/16/9.jpg',
          userProfileUrl: '/docz-mock-url/user-profile-url',
        }}
      />
      <ContributorCard
        title='Mike Champion'
        subtitle='9 projects - 18% complete'
        positionNumber={2}
        avatarProps={{
          userImageUrl: 'https://monosnap.com/image/G3KnCrR5dUmboLWXCJahOUD4KfJTLi',
          userProfileUrl: '/docz-mock-url/user-profile-url',
        }}
      />
      <ContributorCard
        title='William Jordan'
        subtitle='2 projects - 50% complete'
        positionNumber={3}
        avatarProps={{
          userImageUrl: 'https://imgbbb.com/images/2020/01/16/11.jpg',
          userProfileUrl: '/docz-mock-url/user-profile-url',
        }}
      />
    </Stack>
  </Box>
</OpportunityOverViewCardBox>;
```
