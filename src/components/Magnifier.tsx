import React, { useState, useRef } from "react";

interface MagnifierProps {
  imageSrc: string;
  zoomFactor?: number;
}

const Magnifier: React.FC<MagnifierProps> = ({ imageSrc, zoomFactor = 2 }) => {
  const [isMagnifying, setIsMagnifying] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => setIsMagnifying(true);
  const handleMouseLeave = () => setIsMagnifying(false);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      const x = event.clientX - left;
      const y = event.clientY - top;
      setPosition({
        x: Math.min(width, Math.max(0, x)),
        y: Math.min(height, Math.max(0, y))
      });
    }
  };

  // Ensure that containerRef.current is defined before calculating sizes
  const containerWidth = containerRef.current ? containerRef.current.clientWidth : 0;
  const containerHeight = containerRef.current ? containerRef.current.clientHeight : 0;

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <img
        src={imageSrc}
        alt="Magnify"
        className="w-full h-full object-contain"
      />
      {isMagnifying && (
        <div
          className="absolute"
          style={{
            width: `${300 / zoomFactor}px`,
            height: `${300 / zoomFactor}px`,
            backgroundImage: `url(${imageSrc})`,
            backgroundSize: `${containerWidth * zoomFactor}px ${containerHeight * zoomFactor}px`,
            backgroundPosition: `-${position.x * zoomFactor}px -${position.y * zoomFactor}px`,
            borderRadius: "50%",
            border: "1px solid rgba(0, 0, 0, 0.5)",
            pointerEvents: "none",
            cursor: "none",
            transform: "translate(-50%, -50%)",
            top: `${position.y}px`,
            left: `${position.x}px`,
            zIndex: 10,
          }}
        />
      )}
    </div>
  );
};

export default Magnifier;
