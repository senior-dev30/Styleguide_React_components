```jsx
const [isSelected, setIsSelected] = React.useState(false);

<PipelineHeaderCard
  title='NOT STARTED'
  amountInMillions={6.2}
  onClick={() => setIsSelected(value => !value)}
  isSelected={isSelected}
  selectedBorderColor='red'
/>;
```

```js
import Box from '../../Box';
import FlexBox from '../../FlexBox';
const [selectedCard, setSelectedCard] = React.useState('NOT STARTED');

<FlexBox>
  <Box marginRight='44px'>
    <PipelineHeaderCard
      title='NOT STARTED'
      amountInMillions={6.2}
      onClick={() => setSelectedCard('NOT STARTED')}
      isSelected={'NOT STARTED' === selectedCard}
      selectedBorderColor='#666666'
    />
  </Box>
  <Box marginRight='44px'>
    <PipelineHeaderCard
      title='OFF TRACK'
      amountInMillions={3.2}
      onClick={() => setSelectedCard('OFF TRACK')}
      isSelected={'OFF TRACK' === selectedCard}
      selectedBorderColor='#e02020'
      marginRight='44px'
    />
  </Box>
  <Box marginRight='44px'>
    <PipelineHeaderCard
      title='AT RISK'
      amountInMillions={2.2}
      onClick={() => setSelectedCard('AT RISK')}
      isSelected={'AT RISK' === selectedCard}
      selectedBorderColor='#ffb300'
      marginRight='44px'
    />
  </Box>
  <Box marginRight='44px'>
    <PipelineHeaderCard
      title='ON TRACK'
      amountInMillions={10}
      onClick={() => setSelectedCard('ON TRACK')}
      isSelected={'ON TRACK' === selectedCard}
      selectedBorderColor='#58d68d'
      marginRight='44px'
    />
  </Box>
  <Box marginRight='44px'>
    <PipelineHeaderCard
      title='DONE'
      amountInMillions={15}
      onClick={() => setSelectedCard('DONE')}
      selectedBorderColor='#58a1d6'
      isSelected={'DONE' === selectedCard}
      marginRight='44px'
    />
  </Box>
  <Box marginRight='44px'>
    <PipelineHeaderCard
      title='PROJECTED TOTAL'
      amountInMillions={36}
      onClick={() => setSelectedCard('PROJECTED TOTAL')}
      isSelected={'PROJECTED TOTAL' === selectedCard}
      selectedBorderColor='#6236ff'
      marginRight='44px'
    />
  </Box>
</FlexBox>;
```
