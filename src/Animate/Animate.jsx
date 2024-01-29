import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

const ZoomImage = ({ src, alt }) => {
  const [hovered, setHovered] = useState(false);

  // Configurando a animação com react-spring
  const zoomAnimation = useSpring({
    transform: hovered ? 'scale(1.2)' : 'scale(1)',
  });

  return (
    <animated.div
      style={zoomAnimation}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={src} alt={alt} />
    </animated.div>
  );
};

export default ZoomImage;
