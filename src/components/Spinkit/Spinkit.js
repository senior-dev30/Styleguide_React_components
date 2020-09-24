import React from 'react';
import { useTheme } from '../../ThemeProvider';
import {
  ChasingDots as ChasingDotsComponent,
  Circle as CircleComponent,
  CubeGrid as CubeGridComponent,
  DoubleBounce as DoubleBounceComponent,
  FadingCircle as FadingCircleComponent,
  FoldingCube as FoldingCubeComponent,
  Pulse as PulseComponent,
  RotatingPlane as RotatingPlaneComponent,
  ThreeBounce as ThreeBounceComponent,
  WanderingCubes as WanderingCubesComponent,
  Wave as WaveComponent,
} from 'better-react-spinkit';

function SpinkitWrapper(SpinnerComponent) {
  function WrappedComponent({ color = 'secondary', ...props }) {
    const theme = useTheme();

    return <SpinnerComponent color={theme.colors[color] || color} {...props} />;
  }

  return WrappedComponent;
}

const ChasingDots = SpinkitWrapper(ChasingDotsComponent);
const Circle = SpinkitWrapper(CircleComponent);
const CubeGrid = SpinkitWrapper(CubeGridComponent);
const DoubleBounce = SpinkitWrapper(DoubleBounceComponent);
const FadingCircle = SpinkitWrapper(FadingCircleComponent);
const FoldingCube = SpinkitWrapper(FoldingCubeComponent);
const Pulse = SpinkitWrapper(PulseComponent);
const RotatingPlane = SpinkitWrapper(RotatingPlaneComponent);
const ThreeBounce = SpinkitWrapper(ThreeBounceComponent);
const WanderingCubes = SpinkitWrapper(WanderingCubesComponent);
const Wave = SpinkitWrapper(WaveComponent);

export {
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
};
