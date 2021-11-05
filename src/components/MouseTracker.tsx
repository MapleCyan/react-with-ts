import React from 'react';
import useMousePosition from '../hooks/useMousePositions';

const MouseTracker: React.FC = () => {
  const positions = useMousePosition();
  // console.log('before render', positions.x);
  return (
    <p>
      X: {positions.x}, Y: {positions.y}
    </p>
  );
};

export default MouseTracker;
