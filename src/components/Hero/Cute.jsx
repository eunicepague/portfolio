import { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';
import './Cute.css';

import Crown from './../../assets/crown.png';

const Cute = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleMouseMove = (e) => {
    const crownContent = document.getElementById('crown-content');
    const rect = crownContent.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left - 88, // subtract half the width of the image
      y: e.clientY - rect.top - 130, // subtract half the height of the image
    });
  };

  useEffect(() => {
    if (isHovered) {
      document.addEventListener('mousemove', handleMouseMove);
    } else {
      document.removeEventListener('mousemove', handleMouseMove);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isHovered]);

  return (
    <div className="cute-container">
      <Row className="cute-content">
        <div className="cute-crown">
          <div
            id="crown-content"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {isHovered && (
              <img
                className="cuteCrown d-none d-md-flex"
                src={Crown}
                style={{
                  position: 'absolute',
                  left: mousePosition.x + 'px',
                  top: mousePosition.y + 'px',
                }}
              />
            )}
          </div>
        </div>
      </Row>
    </div>
  );
};

export default Cute;
