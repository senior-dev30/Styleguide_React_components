### Basis Example

```js
import FlexBox from '../FlexBox';
import Button from '../Button/Button.js';
import * as animationData from './pinjump.json';

const [isStopped, setIsStopped] = React.useState(false);
const [isPaused, setIsPaused] = React.useState(false);

<div>
  <Lottie
    options={{
      loop: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    }}
    isStopped={isStopped}
    isPaused={isPaused}
    height='200px'
    width='200px'
  />

  <FlexBox justifyContent='space-around' marginHorizontal='30%'>
    <Button color='primary' size='md' onClick={() => setIsStopped(val => !val)}>
      {isStopped ? 'play' : 'stop'}
    </Button>
    <Button color='primary' size='md' onClick={() => setIsPaused(val => !val)}>
      {isPaused ? 'resume' : 'pause'}
    </Button>
  </FlexBox>
</div>;
```

### Trigger like

```js
import FlexBox from '../FlexBox';
import Button from '../Button/Button.js';
import * as animationData from './TwitterHeart.json';

const [isStopped, setIsStopped] = React.useState(true);
const [isLiked, setIsLiked] = React.useState(false);
const [direction, setDirection] = React.useState(1);

<div>
  <Lottie
    options={{
      loop: false,
      autoplay: false,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    }}
    height='200px'
    width='200px'
    speed={1}
    direction={direction}
  />

  <FlexBox justifyContent='space-around' marginHorizontal='30%'>
    <Button
      color='primary'
      size='md'
      onClick={e => {
        if (!isStopped) {
          setDirection(val => val * -1);
        }
        setIsStopped(false);
        setIsLiked(!isLiked);
      }}
    >
      {isLiked ? 'Unlike' : 'Like'}
    </Button>
  </FlexBox>
</div>;
```

### Plauyground

```js
import React, { useState } from 'react';
import Box from '../Box';
import InputTextArea from '../InputTextArea/InputTextArea.js';
import Input from '../Input/Input.js';
import FlexBox from '../FlexBox';
import Button from '../Button/Button.js';
import * as watchAnimationData from './stopwatch.json';

const [loop, setLoop] = useState(true);
const [animationData, setAnimationData] = useState(watchAnimationData);
const [speed, setSpeed] = useState(1);
const [direction, setDirection] = useState(1);

const [isStopped, setIsStopped] = useState(false);
const [isPaused, setIsPaused] = useState(false);

<Box key={`${loop}`}>
  <div>
    <Lottie
      options={{
        loop,
        animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice',
        },
      }}
      height='200px'
      width='200px'
      isStopped={isStopped}
      isPaused={isPaused}
      speed={speed}
      direction={direction}
    />

    <FlexBox justifyContent='space-between'>
      <FlexBox justifyContent='space-around'>
        <Button color='primary' size='md' style={{}} onClick={() => setIsStopped(val => !val)}>
          {isStopped ? 'play' : 'stop'}
        </Button>
        <Button color='primary' size='md' onClick={() => setIsPaused(val => !val)}>
          {isPaused ? 'resume' : 'pause'}
        </Button>
      </FlexBox>

      <FlexBox justifyContent='flex-start' marginHorizontal='5px' alignItems='center'>
        <Box marginRight='40px' width='150px'>
          <Box as='label' fontSize='18px'>
            Speed x{speed}
          </Box>
          <Input
            width='20px'
            value={speed}
            min='0'
            type='range'
            max='3'
            step='0.25'
            onChange={e => setSpeed(e.target.value)}
          />
        </Box>
        <Box width='100px'>
          <label>Direction (1, -1)</label>
          <Input
            width='20px'
            type='number'
            value={direction}
            maxLength={1}
            min='-1'
            max='1'
            step='2'
            onChange={e => setDirection(e.target.value)}
          />
        </Box>
      </FlexBox>

      <FlexBox paddingRight='400px' alignItems='center'>
        <Box marginLeft='100px'>
          <label style={{ marginRight: '10px' }}>Loop</label>
          <input type='checkbox' checked={loop} onChange={() => setLoop(loop => !loop)} />
        </Box>
      </FlexBox>
    </FlexBox>
    <Box width='100%' marginTop='10px'>
      <label>Animation Data</label>
      <InputTextArea
        value={JSON.stringify(animationData)}
        onChange={e => e.target.value && setAnimationData(JSON.parse(e.target.value))}
      />
      <Box marginTop='10px'>
        Go to <a href='https://lottiefiles.com/featured'> https://lottiefiles.com/featured </a>,
        copy and paste animation data here to play animation.
      </Box>
    </Box>
  </div>
</Box>;
```

with segments

```js
import FlexBox from '../FlexBox';
import Box from '../Box';
import Input from '../Input/Input.js';
import * as animationData from './stopwatch.json';

const [speed, setSpeed] = React.useState(1);
const [startFrame, setStartFrame] = React.useState(0);
const [endFrame, setEndFrame] = React.useState(50);

<Box textAlign='center'>
  <Lottie
    options={{
      autoplay: true,
      loop: true,
      animationData,
    }}
    height='200px'
    width='200px'
    speed={speed}
    segments={[startFrame, endFrame]}
  />

  <p>Speed: x{speed}</p>
  <input
    type='range'
    value={speed}
    min='0'
    max='3'
    step='0.25'
    onChange={e => setSpeed(e.currentTarget.value)}
  />
  <p>
    Segment range: [{startFrame}, {endFrame}]
  </p>
  <FlexBox marginHorizontal='auto' justifyContent='center'>
    <Box marginRight='10px'>
      <Input
        type='number'
        min='0'
        value={startFrame}
        onChange={e => setStartFrame(parseInt(e.currentTarget.value, 10) || 0)}
      />
    </Box>
    <Box>
      <Input
        type='number'
        min='0'
        value={endFrame}
        onChange={e => setEndFrame(parseInt(e.currentTarget.value, 10) || 0)}
      />
    </Box>
  </FlexBox>
</Box>;
```
