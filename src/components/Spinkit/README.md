We're just extending [better-react-spinkit](http://better-react-spinkit.benjamintatum.com/) to integrate our theme colors with `better-react-spinkit` spinners.

### Usage

`import { ChasingDots } from "src/components/Spinkit"`

`<ChasingDots />`

Other available spinners are `Circle`, `CubeGrid`, `DoubleBounce`, `FadingCircle`, `FoldingCube`, `Pulse`, `RotatingPlane`, `ThreeBounce`, `WanderingCubes` and `Wave`.

### Docs

By default it uses `secondary` theme color.
You can read more about docs at http://better-react-spinkit.benjamintatum.com.

### Examples

with default `secondary` color

```js
import {
  ChasingDots,
  Circle,
  CubeGrid,
  DoubleBounce,
  FadingCircle,
  FoldingCube,
  Pulse,
  RotatingPlane,
  ThreeBounce,
  WanderingCubes,
  Wave,
} from '../';
import FlexBox from '../FlexBox';
import Box from '../Box';
import Text from '../Text';

<Box
  display='grid'
  gridGap='30px'
  gridAutoFlow='row dense'
  gridTemplateColumns='1fr 1fr 1fr 1fr'
  gridRowGap='80px'
  marginVertical='40px'
  flexWrap='wrap'
>
  <FlexBox
    flexDirection='column'
    justifyContent='flex-end'
    alignContent='center'
    alignItems='center'
  >
    <Box textAlign='center'>
      <ChasingDots />
    </Box>
    <Box textAlign='center' fontSize='12px' marginTop='32px'>
      {'<ChasingDots />'}
    </Box>
  </FlexBox>

  <FlexBox
    flexDirection='column'
    justifyContent='flex-end'
    alignContent='center'
    alignItems='center'
  >
    <Box textAlign='center'>
      <Circle />
    </Box>
    <Box textAlign='center' fontSize='12px' marginTop='32px'>
      {'<Circle />'}
    </Box>
  </FlexBox>

  <FlexBox
    flexDirection='column'
    justifyContent='flex-end'
    alignContent='center'
    alignItems='center'
  >
    <Box textAlign='center'>
      <CubeGrid />
    </Box>
    <Box textAlign='center' fontSize='12px' marginTop='32px'>
      {'<CubeGrid />'}
    </Box>
  </FlexBox>

  <FlexBox
    flexDirection='column'
    justifyContent='flex-end'
    alignContent='center'
    alignItems='center'
  >
    <Box textAlign='center'>
      <DoubleBounce />
    </Box>
    <Box textAlign='center' fontSize='12px' marginTop='32px'>
      {'<DoubleBounce />'}
    </Box>
  </FlexBox>

  <FlexBox
    flexDirection='column'
    justifyContent='flex-end'
    alignContent='center'
    alignItems='center'
  >
    <Box textAlign='center'>
      <FadingCircle />
    </Box>
    <Box textAlign='center' fontSize='12px' marginTop='32px'>
      {'<FadingCircle />'}
    </Box>
  </FlexBox>

  <FlexBox
    flexDirection='column'
    justifyContent='flex-end'
    alignContent='center'
    alignItems='center'
  >
    <Box textAlign='center'>
      <FoldingCube />
    </Box>
    <Box textAlign='center' fontSize='12px' marginTop='32px'>
      {'<FoldingCube />'}
    </Box>
  </FlexBox>

  <FlexBox
    flexDirection='column'
    justifyContent='flex-end'
    alignContent='center'
    alignItems='center'
  >
    <Box textAlign='center'>
      <Pulse />
    </Box>
    <Box textAlign='center' fontSize='12px' marginTop='32px'>
      {'<Pulse />'}
    </Box>
  </FlexBox>

  <FlexBox
    flexDirection='column'
    justifyContent='flex-end'
    alignContent='center'
    alignItems='center'
  >
    <Box textAlign='center'>
      <RotatingPlane />
    </Box>
    <Box textAlign='center' fontSize='12px' marginTop='32px'>
      {'<RotatingPlane />'}
    </Box>
  </FlexBox>
  <FlexBox
    flexDirection='column'
    justifyContent='flex-end'
    alignContent='center'
    alignItems='center'
  >
    <Box textAlign='center'>
      <ThreeBounce />
    </Box>
    <Box textAlign='center' fontSize='12px' marginTop='32px'>
      {'<ThreeBounce />'}
    </Box>
  </FlexBox>
  <FlexBox
    flexDirection='column'
    justifyContent='flex-end'
    alignContent='center'
    alignItems='center'
  >
    <Box textAlign='center'>
      <WanderingCubes />
    </Box>
    <Box textAlign='center' fontSize='12px' marginTop='32px'>
      {'<WanderingCubes />'}
    </Box>
  </FlexBox>
  <FlexBox
    flexDirection='column'
    justifyContent='flex-end'
    alignContent='center'
    alignItems='center'
  >
    <Box textAlign='center'>
      <Wave />
    </Box>
    <Box textAlign='center' fontSize='12px' marginTop='32px'>
      {'<Wave />'}
    </Box>
  </FlexBox>
</Box>;
```

use differnt theme colors `color='primary|secondary|error|...'`

```js
import {
  ChasingDots,
  Circle,
  CubeGrid,
  DoubleBounce,
  FadingCircle,
  FoldingCube,
  Pulse,
  RotatingPlane,
  ThreeBounce,
  WanderingCubes,
  Wave,
} from '../';
import FlexBox from '../FlexBox';
import Box from '../Box';
import Text from '../Text';
import { useTheme } from '../../ThemeProvider';

const theme = useTheme();

<Box
  display='grid'
  gridGap='30px'
  gridAutoFlow='row dense'
  gridTemplateColumns='1fr 1fr 1fr 1fr'
  gridRowGap='80px'
  marginVertical='40px'
  flexWrap='wrap'
>
  {Object.entries(theme.colors).map(([colorName]) => (
    <FlexBox
      flexDirection='column'
      justifyContent='flex-end'
      alignContent='center'
      alignItems='center'
    >
      <Box textAlign='center'>
        <ChasingDots color={colorName} />
      </Box>
      <Box textAlign='center' fontSize='12px' marginTop='32px'>
        {`<ChasingDots color='${colorName}' />`}
      </Box>
    </FlexBox>
  ))}
</Box>;
```

with `size={50}`

```js
import {
  ChasingDots,
  Circle,
  CubeGrid,
  DoubleBounce,
  FadingCircle,
  FoldingCube,
  Pulse,
  RotatingPlane,
  ThreeBounce,
  WanderingCubes,
  Wave,
} from '../';
import FlexBox from '../FlexBox';
import Box from '../Box';
import Text from '../Text';

<Box
  display='grid'
  gridGap='30px'
  gridAutoFlow='row dense'
  gridTemplateColumns='1fr 1fr 1fr 1fr'
  gridRowGap='80px'
  marginVertical='40px'
  flexWrap='wrap'
>
  <FlexBox
    flexDirection='column'
    justifyContent='flex-end'
    alignContent='center'
    alignItems='center'
  >
    <Box textAlign='center'>
      <ChasingDots size={50} />
    </Box>
    <Box textAlign='center' fontSize='12px' marginTop='32px'>
      {'<ChasingDots size={50} />'}
    </Box>
  </FlexBox>

  <FlexBox
    flexDirection='column'
    justifyContent='flex-end'
    alignContent='center'
    alignItems='center'
  >
    <Box textAlign='center'>
      <Circle size={50} />
    </Box>
    <Box textAlign='center' fontSize='12px' marginTop='32px'>
      {'<Circle size={50} />'}
    </Box>
  </FlexBox>

  <FlexBox
    flexDirection='column'
    justifyContent='flex-end'
    alignContent='center'
    alignItems='center'
  >
    <Box textAlign='center'>
      <CubeGrid size={50} />
    </Box>
    <Box textAlign='center' fontSize='12px' marginTop='32px'>
      {'<CubeGrid size={50} />'}
    </Box>
  </FlexBox>

  <FlexBox
    flexDirection='column'
    justifyContent='flex-end'
    alignContent='center'
    alignItems='center'
  >
    <Box textAlign='center'>
      <DoubleBounce size={50} />
    </Box>
    <Box textAlign='center' fontSize='12px' marginTop='32px'>
      {'<DoubleBounce size={50} />'}
    </Box>
  </FlexBox>

  <FlexBox
    flexDirection='column'
    justifyContent='flex-end'
    alignContent='center'
    alignItems='center'
  >
    <Box textAlign='center'>
      <FadingCircle size={50} />
    </Box>
    <Box textAlign='center' fontSize='12px' marginTop='32px'>
      {'<FadingCircle size={50} />'}
    </Box>
  </FlexBox>

  <FlexBox
    flexDirection='column'
    justifyContent='flex-end'
    alignContent='center'
    alignItems='center'
  >
    <Box textAlign='center'>
      <FoldingCube size={50} />
    </Box>
    <Box textAlign='center' fontSize='12px' marginTop='32px'>
      {'<FoldingCube size={50} />'}
    </Box>
  </FlexBox>

  <FlexBox
    flexDirection='column'
    justifyContent='flex-end'
    alignContent='center'
    alignItems='center'
  >
    <Box textAlign='center'>
      <Pulse size={50} />
    </Box>
    <Box textAlign='center' fontSize='12px' marginTop='32px'>
      {'<Pulse size={50} />'}
    </Box>
  </FlexBox>

  <FlexBox
    flexDirection='column'
    justifyContent='flex-end'
    alignContent='center'
    alignItems='center'
  >
    <Box textAlign='center'>
      <RotatingPlane size={50} />
    </Box>
    <Box textAlign='center' fontSize='12px' marginTop='32px'>
      {'<RotatingPlane size={50} />'}
    </Box>
  </FlexBox>
  <FlexBox
    flexDirection='column'
    justifyContent='flex-end'
    alignContent='center'
    alignItems='center'
  >
    <Box textAlign='center'>
      <ThreeBounce size={50} />
    </Box>
    <Box textAlign='center' fontSize='12px' marginTop='32px'>
      {'<ThreeBounce size={50} />'}
    </Box>
  </FlexBox>
  <FlexBox
    flexDirection='column'
    justifyContent='flex-end'
    alignContent='center'
    alignItems='center'
  >
    <Box textAlign='center'>
      <WanderingCubes size={50} />
    </Box>
    <Box textAlign='center' fontSize='12px' marginTop='32px'>
      {'<WanderingCubes size={50} />'}
    </Box>
  </FlexBox>
  <FlexBox
    flexDirection='column'
    justifyContent='flex-end'
    alignContent='center'
    alignItems='center'
  >
    <Box textAlign='center'>
      <Wave size={50} />
    </Box>
    <Box textAlign='center' fontSize='12px' marginTop='32px'>
      {'<Wave size={50} />'}
    </Box>
  </FlexBox>
</Box>;
```
