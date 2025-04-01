import { useState, useEffect } from 'react';

export interface Butterfly {
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

const useButterflyEffect = (initialButterflies: Butterfly[]) => {
  const [butterflies, setButterflies] = useState<Butterfly[]>(initialButterflies);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const repulsionRadius = 400;
      const fleeDistance = 1000;

      setButterflies(prevButterflies => {
        return prevButterflies.map(butterfly => {
          const element = document.querySelector(`[data-id="${butterfly.id}"]`) as HTMLElement;
          if (!element) return butterfly;

          const rect = element.getBoundingClientRect();
          const elementX = rect.left + rect.width / 2;
          const elementY = rect.top + rect.height / 2;

          const dx = elementX - mouseX;
          const dy = elementY - mouseY;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < repulsionRadius) {
            const angle = Math.atan2(dy, dx);
            const force = (repulsionRadius - distance) / repulsionRadius;
            
            const fleeX = Math.cos(angle) * fleeDistance * force;
            const fleeY = Math.sin(angle) * fleeDistance * force;

            return {
              ...butterfly,
              currentPosition: { x: fleeX, y: fleeY },
              fleeing: true
            };
          } else if (butterfly.fleeing) {
            return {
              ...butterfly,
              currentPosition: { 
                x: butterfly.currentPosition.x * 0.9, 
                y: butterfly.currentPosition.y * 0.9 
              },
              fleeing: Math.abs(butterfly.currentPosition.x) > 0.1 || 
                      Math.abs(butterfly.currentPosition.y) > 0.1
            };
          }

          return butterfly;
        });
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return { butterflies, setButterflies };
};

export default useButterflyEffect;