Basic Example

```jsx
<AvatarWithNameTitle
  name='Ashley Page'
  title='sales manager'
  avatarProps={{
    userImageUrl: 'https://imgbbb.com/images/2020/01/16/9.jpg',
    userProfileUrl: '/docz-mock-url/user-profile-url',
    size: '64px',
    borderRadius: 8,
  }}
/>
```

with diff `avatarPosition`

```jsx padded
import { Box } from '../';

['left', 'right', 'top'].map(avatarPosition => (
  <Box paddingBottom='40px'>
    <AvatarWithNameTitle
      name='Ashley Page'
      title='sales manager'
      avatarPosition={avatarPosition}
      avatarProps={{
        userImageUrl: 'https://imgbbb.com/images/2020/01/16/9.jpg',
        userProfileUrl: '/docz-mock-url/user-profile-url',
        size: '64px',
        borderRadius: 8,
      }}
    />
  </Box>
));
```

use html as `name`/`title`

```jsx
<AvatarWithNameTitle
  name={
    <span>
      Sales Idea Party - <i>Host Ashley Allen</i>
    </span>
  }
  title={
    <span>
      cost savings - <small> focus on fleet</small>
    </span>
  }
  avatarPosition='left'
  avatarProps={{
    userImageUrl: 'https://imgbbb.com/images/2020/01/16/9.jpg',
    userProfileUrl: '/docz-mock-url/user-profile-url',
    size: '64px',
    borderRadius: 8,
  }}
/>
```

Some Design examples

```jsx padded
import { Box, FlexBox } from '../';

<FlexBox justifyContent='space-around'>
  <FlexBox justifyContent='space-around' flexDirection='column' inlineFlex>
    <AvatarWithNameTitle
      name='Neal Gee'
      title='IT - Director'
      avatarPosition='left'
      nameFontWeight='600'
      nameFontSize='14px'
      titleFontSize='12px'
      avatarProps={{
        userImageUrl: 'https://imgbbb.com/images/2020/01/16/20.jpg',
        userProfileUrl: '/docz-mock-url/user-profile-url',
        size: '45px',
        borderRadius: '11px',
        boxShadow: '0 1px 3px 0 var(--secondary)',
      }}
      nameTitleBoxProps={{
        marginLeft: 13,
      }}
    />
    <Box marginTop='30px' alignSelf='center'>
      Group Leader variant
    </Box>
  </FlexBox>

  <FlexBox justifyContent='center' flexDirection='column' inlineFlex>
    <AvatarWithNameTitle
      name='Neal Gee'
      title='IT - Director'
      avatarPosition='left'
      titleFontSize='14px'
      avatarProps={{
        userImageUrl: 'https://imgbbb.com/images/2020/01/16/21.jpg',
        userProfileUrl: '/docz-mock-url/user-profile-url',
        size: '64px',
        borderRadius: '17px',
        boxShadow: '0 1px 3px 0 var(--secondary)',
      }}
    />
    <Box marginTop='30px' alignSelf='center'>
      Stakeholder variant
    </Box>
  </FlexBox>

  <FlexBox flexDirection='column' inlineFlex>
    <AvatarWithNameTitle
      name='Ashley Williams'
      avatarPosition='top'
      nameFontSize='14px'
      nameFontWeight={500}
      avatarProps={{
        userImageUrl: 'https://imgbbb.com/images/2020/01/16/34.jpg',
        userProfileUrl: '/docz-mock-url/user-profile-url',
        size: '64px',
        borderRadius: '17px',
        boxShadow: '0 1px 3px 0 var(--secondary)',
        marginHorizontal: 'auto',
        display: 'flex',
        justifyContent: 'center',
        avatarLinkProps: {
          style: {
            marginLeft: 'auto',
            marginRight: 'auto',
          },
        },
      }}
      nameTitleBoxProps={{
        marginTop: '7px',
        marginHorizontal: 'auto',
      }}
    />
    <Box marginTop='30px' alignSelf='center' marginBottom='auto'>
      Idea Agent variant
    </Box>
  </FlexBox>
</FlexBox>;
```
