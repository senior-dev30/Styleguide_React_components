# Box

Box is the most abstract component on top of which all other
components are built. By default, it renders a `div` element

**The Box component is useful because it helps with two common use cases:**

- Create responsive layouts with ease.
- Compose new component and allow for override using the `as` prop.

## Usage

```jsx
<Box
  margin='10px'
  backgroundColor='tomato'
  weidt='100%'
  padding={4}
  color='white'
  textDecoration='underline'
  borderRadius='7px'
>
  This is the Box
  <Box
    margin='10px'
    paddingHorizontal='50px'
    background='orange'
    width='50%'
    color='white'
    textDecor='underline'
  >
    Inner Box
  </Box>
</Box>
```

### `as` prop

You can use the `as` prop to change the element render, just like
`styled-components` or `emotions`.

```jsx
<Box
  as='button'
  borderRadius='md'
  background='tomato'
  paddingHorizontal={12}
  height={8}
  color='white'
>
  Button
</Box>
```

## Space

```js
<Box marginLeft='10px'>I'm Box Text</Box>
```

| Prop                | CSS Property                       | Theme Field |
| ------------------- | ---------------------------------- | ----------- |
| `margin`            | `margin`                           | `space`     |
| `marginTop`         | `margin-top`                       | `space`     |
| `marginRight`       | `margin-right`                     | `space`     |
| `marginBottom`      | `margin-bottom`                    | `space`     |
| `marginLeft`        | `margin-left`                      | `space`     |
| `marginHorizontal`  | `margin-left` and `margin-right`   | `space`     |
| `marginVertical`    | `margin-top` and `margin-bottom`   | `space`     |
| `padding`           | `padding`                          | `space`     |
| `paddingTop`        | `padding-top`                      | `space`     |
| `paddingRight`      | `padding-right`                    | `space`     |
| `paddingBottom`     | `padding-bottom`                   | `space`     |
| `paddingLeft`       | `padding-left`                     | `space`     |
| `paddingHorizontal` | `padding-left` and `padding-right` | `space`     |
| `paddingVertical`   | `padding-top` and `padding-bottom` | `space`     |

## Color

```js
import Text from '../Text';

<Box color='white' background='black' padding='20px'>
  Header
</Box>;
```

| Prop              | CSS Property       | Theme Field |
| ----------------- | ------------------ | ----------- |
| `color`           | `color`            | `colors`    |
| `backgroundColor` | `background-color` | `colors`    |
| `opacity`         | `opacity`          | none        |

## Typography

```js
<Box fontFamily='Helvetica' fontStyle='italic' fontSize='20px' textAlign='center' fontWeight='900'>
  Hello!
</Box>
```

| Prop            | CSS Property     | Theme Field      |
| --------------- | ---------------- | ---------------- |
| `fontFamily`    | `font-family`    | `fonts`          |
| `fontSize`      | `font-size`      | `fontSizes`      |
| `fontWeight`    | `font-weight`    | `fontWeights`    |
| `lineHeight`    | `line-height`    | `lineHeights`    |
| `letterSpacing` | `letter-spacing` | `letterSpacings` |
| `textAlign`     | `text-align`     | none             |
| `fontStyle`     | `font-style`     | none             |

## Layout

```js
<Box width='100%' height={32} overflow='hidden'>
  Hello Agreed Developers
</Box>
```

| Prop            | CSS Property     | Theme Field |
| --------------- | ---------------- | ----------- |
| `width`         | `width`          | `sizes`     |
| `height`        | `height`         | `sizes`     |
| `minWidth`      | `min-width`      | `sizes`     |
| `maxWidth`      | `max-width`      | `sizes`     |
| `minHeight`     | `min-height`     | `sizes`     |
| `maxHeight`     | `max-height`     | `sizes`     |
| `size`          | `width` `height` | `sizes`     |
| `display`       | `display`        | none        |
| `verticalAlign` | `vertical-align` | none        |
| `overflow`      | `overflow`       | none        |
| `overflowX`     | `overflowX`      | none        |
| `overflowY`     | `overflowY`      | none        |

## Flexbox

```js
<Box alignItems='center' justifyContent='space-between'>
  Blog
</Box>
```

| Prop             | CSS Property       | Theme Field |
| ---------------- | ------------------ | ----------- |
| `alignItems`     | `align-items`      | none        |
| `alignContent`   | `align-content`    | none        |
| `justifyItems`   | `justify-items`    | none        |
| `justifyContent` | `justify-content`  | none        |
| `flexWrap`       | `flex-wrap`        | none        |
| `flexDirection`  | `flex-direction`   | none        |
| `flex`           | `flex` (shorthand) | none        |
| `flexGrow`       | `flex-grow`        | none        |
| `flexShrink`     | `flex-shrink`      | none        |
| `flexBasis`      | `flex-basis`       | none        |
| `justifySelf`    | `justify-self`     | none        |
| `alignSelf`      | `align-self`       | none        |
| `order`          | `order`            | none        |

## Grid Layout

```js
// import { grid } from 'styled-system'
// or `import grid from '@styled-system/grid'`

<Box display='grid' gridGap={2} gridAutoFlow='row dense'>
  <Box width='100%' height='10' backgroundColor='primary' />
  <Box width='100%' height='10' backgroundColor='primary' />
  <Box width='100%' height='10' backgroundColor='primary' />
  <Box width='100%' height='10' backgroundColor='primary' />
  <Box width='100%' height='10' backgroundColor='primary' />
</Box>
```

| Prop                  | CSS Property            | Theme Field |
| --------------------- | ----------------------- | ----------- |
| `gridGap`             | `grid-gap`              | `space`     |
| `gridRowGap`          | `grid-row-gap`          | `space`     |
| `gridColumnGap`       | `grid-column-gap`       | `space`     |
| `gridColumn`          | `grid-column`           | none        |
| `gridRow`             | `grid-row`              | none        |
| `gridArea`            | `grid-area`             | none        |
| `gridAutoFlow`        | `grid-auto-flow`        | none        |
| `gridAutoRows`        | `grid-auto-rows`        | none        |
| `gridAutoColumns`     | `grid-auto-columns`     | none        |
| `gridTemplateRows`    | `grid-template-rows`    | none        |
| `gridTemplateColumns` | `grid-template-columns` | none        |
| `gridTemplateAreas`   | `grid-template-areas`   | none        |

## Background

```js
<div>
  <div>
    <Box
      as='image'
      size='24px'
      src='https://imgbbb.com/images/2020/01/16/9.jpg'
      // backgroundImage='url("")'
      backgroundPosition='center'
      backgroundRepeat='no-repeat'
    />
  </div>
</div>
```

| Prop                 | CSS Property          | Theme Field |
| -------------------- | --------------------- | ----------- |
| `background`         | `background`          | none        |
| `backgroundImage`    | `background-image`    | none        |
| `backgroundSize`     | `background-size`     | none        |
| `backgroundPosition` | `background-position` | none        |
| `backgroundRepeat`   | `background-repeat`   | none        |

## Border

```js
// or `import border from '@styled-system/border'`

<div>
  <Box
    borderWidth='5px'
    borderStyle='solid'
    borderColor='orange'
    borderRadius='3px'
    backgroundColor='pink'
    size='100px'
  >
    Card
  </Box>
</div>
```

| Prop                      | CSS Property                   | Theme Field    |
| ------------------------- | ------------------------------ | -------------- |
| `border`                  | `border`                       | `borders`      |
| `borderWidth`             | `border-width`                 | `borderWidths` |
| `borderStyle`             | `border-style`                 | `borderStyles` |
| `borderColor`             | `border-color`                 | `colors`       |
| `borderRadius`            | `border-radius`                | `radii`        |
| `borderTop`               | `border-top`                   | `borders`      |
| `borderTopWidth`          | `border-top-width`             | `borderWidths` |
| `borderTopStyle`          | `border-top-style`             | `borderStyles` |
| `borderTopColor`          | `border-top-color`             | `colors`       |
| `borderTopLeftRadius`     | `border-top-left-radius`       | `radii`        |
| `borderTopRightRadius`    | `border-top-right-radius`      | `radii`        |
| `borderRight`             | `border-right`                 | `borders`      |
| `borderRightWidth`        | `border-right-width`           | `borderWidths` |
| `borderRightStyle`        | `border-right-style`           | `borderStyles` |
| `borderRightColor`        | `border-right-color`           | `colors`       |
| `borderBottom`            | `border-bottom`                | `borders`      |
| `borderBottomWidth`       | `border-bottom-width`          | `borderWidths` |
| `borderBottomStyle`       | `border-bottom-style`          | `borderStyles` |
| `borderBottomColor`       | `border-bottom-color`          | `colors`       |
| `borderBottomLeftRadius`  | `border-bottom-left-radius`    | `radii`        |
| `borderBottomRightRadius` | `border-bottom-right-radius`   | `radii`        |
| `borderLeft`              | `border-left`                  | `borders`      |
| `borderLeftWidth`         | `border-left-width`            | `borderWidths` |
| `borderLeftStyle`         | `border-left-style`            | `borderStyles` |
| `borderLeftColor`         | `border-left-color`            | `colors`       |
| `borderX`                 | `border-left` & `border-right` | `borders`      |
| `borderY`                 | `border-top` & `border-bottom` | `borders`      |

## Position

```js
<Box position='relative' top='12px' left='2px' right={0} bottom={0}>
  Cover
</Box>
```

| Prop       | CSS Property | Theme Field |
| ---------- | ------------ | ----------- |
| `position` | `position`   | none        |
| `zIndex`   | `z-index`    | `zIndices`  |
| `top`      | `top`        | `space`     |
| `right`    | `right`      | `space`     |
| `bottom`   | `bottom`     | `space`     |
| `left`     | `left`       | `space`     |

## Shadow

```js
import { shadow } from 'styled-system';
// or `import shadow from '@styled-system/shadow'`

<Box textShadow='2px 2px #ff0000' boxShadow='5px 10px #888888'>
  Text with shadows
</Box>;
```

| Prop         | CSS Property  | Theme Field |
| ------------ | ------------- | ----------- |
| `textShadow` | `text-shadow` | `shadows`   |
| `boxShadow`  | `box-shadow`  | `shadows`   |

<hr />
<hr />
<hr />
<hr />

<!-- ```jsx
### Usage
// Sample card from Airbnb
const property = {
  imageUrl: 'https://bit.ly/2Z4KKcF',
  imageAlt: 'Rear view of modern home with pool',
  beds: 3,
  baths: 2,
  title: 'Modern home in city center in the heart of historic Los Angeles',
  formattedPrice: '$1,900.00',
  reviewCount: 34,
  rating: 4,
};

<Box maxW='sm' borderWidth='1px' rounded='lg' overflow='hidden'>
  {/* <Image src={property.imageUrl} alt={property.imageAlt} /> */}

  <Box p='6'>
    <Box d='flex' alignItems='baseline'>
      {/*
			<Badge rounded='full' px='2' variantColor='teal'>
        New
      </Badge>
			*/}
      <Box
        color='gray.500'
        fontWeight='semibold'
        letterSpacing='wide'
        fontSize='xs'
        textTransform='uppercase'
        ml='2'
      >
        {property.beds} beds &bull; {property.baths} baths
      </Box>
    </Box>

    <Box mt='1' fontWeight='semibold' as='h4' lineHeight='tight' isTruncated>
      {property.title}
    </Box>

    <Box>
      {property.formattedPrice}
      <Box as='span' color='gray.600' fontSize='sm'>
        / wk
      </Box>
    </Box>

    <Box d='flex' mt='2' alignItems='center'>
      {/*Array(5)
        .fill('')
        .map((_, i) => (
          <StarIcon key={i} color={i < property.rating ? 'teal.500' : 'gray.300'} />
        ))*/}
      <Box as='span' ml='2' color='gray.600' fontSize='sm'>
        {property.reviewCount} reviews
      </Box>
    </Box>
  </Box>
</Box>;

-->
