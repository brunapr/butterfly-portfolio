
import { useEffect, useRef } from 'react';

interface ButterflyProps {
  butterfly: ButterflyType;
  className?: string;
}

export interface ButterflyType {
  id: string;
  top: string;
  left: string;
  scale: string;
  rotate: string;
  flapSpeed: number;
  basePosition: { x: number; y: number };
  currentPosition: { x: number; y: number };
  fleeing: boolean;
}

export interface Position {
  x: number;
  y: number;
}

const Butterfly = ({ butterfly, className = '' }: ButterflyProps) => {
  const leftWingRef = useRef<HTMLImageElement>(null);
  const rightWingRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const leftWing = leftWingRef.current;
    const rightWing = rightWingRef.current;

    if (!leftWing || !rightWing) return;

    let animationId: number;
    let startTime: number | null = null;
    const duration = 1000 / butterfly.flapSpeed;

    const animateWings = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / duration;


      const wingAngle = Math.sin(progress * Math.PI * 2) * 40;
      const wingLift = Math.abs(Math.sin(progress * Math.PI * 2)) * 10;

      leftWing.style.transform = `
        rotateY(${wingAngle}deg)
        translateY(${-wingLift}px)
      `;

      rightWing.style.transform = `
        rotateY(${-wingAngle}deg)
        translateY(${-wingLift}px)
      `;

      animationId = requestAnimationFrame(animateWings);
    };

    animationId = requestAnimationFrame(animateWings);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [butterfly.flapSpeed]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.style.transform = `translate(${butterfly.currentPosition.x}px, ${butterfly.currentPosition.y}px) rotate(${butterfly.rotate})`;
  }, [butterfly.currentPosition, butterfly.rotate]);

  return (
    <div
      ref={containerRef}
      style={{
        top: butterfly.top,
        left: butterfly.left,
        scale: butterfly.scale,
        transition: butterfly.fleeing
          ? 'transform 0.5s ease-out'
          : 'transform 2s cubic-bezier(0.25, 0.1, 0.25, 1)'
      }}
      className={`flex z-[1] ${className} absolute mix-blend-difference flap`}
      data-id={butterfly.id}
    >
      <img
        ref={leftWingRef}
        src="/icons/butterfly/btf-wing-left.svg"
        alt="butterfly wing"
        className="origin-right transition-transform duration-75"
      />
      <img
        ref={rightWingRef}
        src="/icons/butterfly/btf-wing-right.svg"
        alt="butterfly wing"
        className="origin-left transition-transform duration-75"
      />
    </div>
  );
};

export default Butterfly;