"use client";
import { useEffect, useRef, useState } from "react";

export default function Games() {
  const [score, setScore] = useState(0);
  const [facePosition, setFacePosition] = useState({ x: 200, y: 200 });
  const [velocity, setVelocity] = useState({ x: 2, y: 2 });
  const [hits, setHits] = useState<{ x: number; y: number; id: number }[]>([]);
  const audioRefs = useRef<HTMLAudioElement[]>([]);
  const hitCounter = useRef(0);
  const faceRef = useRef<HTMLImageElement | null>(null);

  // Load sounds
  useEffect(() => {
    audioRefs.current = [
      new Audio("/sounds/ow1.mp3"),
      new Audio("/sounds/ow2.mp3"),
      new Audio("/sounds/ow3.mp3"),
    ];
  }, []);

  // Floating movement
  useEffect(() => {
    let animationFrame: number;

    const moveFace = () => {
      setFacePosition((pos) => {
        if (!faceRef.current) return pos;

        const faceWidth = faceRef.current.offsetWidth;
        const faceHeight = faceRef.current.offsetHeight;
        const newX = pos.x + velocity.x;
        const newY = pos.y + velocity.y;

        let newVelX = velocity.x;
        let newVelY = velocity.y;

        // Bounce off window edges
        if (newX <= 0) {
          newVelX = Math.abs(newVelX);
        } else if (newX + faceWidth >= window.innerWidth) {
          newVelX = -Math.abs(newVelX);
        }

        if (newY <= 0) {
          newVelY = Math.abs(newVelY);
        } else if (newY + faceHeight >= window.innerHeight) {
          newVelY = -Math.abs(newVelY);
        }

        setVelocity({ x: newVelX, y: newVelY });
        return { x: newX, y: newY };
      });

      animationFrame = requestAnimationFrame(moveFace);
    };

    animationFrame = requestAnimationFrame(moveFace);
    return () => cancelAnimationFrame(animationFrame);
  }, [velocity]);

  // Handle punch
  const handleShoot = (e: React.MouseEvent<HTMLImageElement>) => {
    setScore((prev) => prev + 1);

    // Add +1 hit marker
    const newHit = { x: e.clientX, y: e.clientY, id: hitCounter.current++ };
    setHits((prev) => [...prev, newHit]);
    setTimeout(() => {
      setHits((prev) => prev.filter((h) => h.id !== newHit.id));
    }, 600);

    // Random velocity change
    setVelocity({
      x: (Math.random() - 0.5) * 12,
      y: (Math.random() - 0.5) * 12,
    });

    // Play random "Ow!"
    const randomIndex = Math.floor(Math.random() * audioRefs.current.length);
    const sound = audioRefs.current[randomIndex];
    if (sound) {
      sound.currentTime = 0;
      sound.playbackRate = 0.9 + Math.random() * 0.3;
      sound.play();
    }
  };

  return (
    <main className="relative min-h-screen bg-gray-950 text-gray-100 flex flex-col items-center justify-center overflow-hidden select-none">
      <h1 className="text-4xl font-bold mb-4 text-orange-400">
        Face Shooter 🎯
      </h1>
      <p className="text-gray-400 mb-4">
        Score: <span className="text-orange-400 font-bold">{score}</span>
      </p>

      {/* Floating Face */}
      <img
        ref={faceRef}
        src="/face.png"
        alt="Allen’s Face"
        onClick={handleShoot}
        className="absolute w-32 h-32 transition-transform duration-100 hover:scale-110 select-none"
        style={{
          left: `${facePosition.x}px`,
          top: `${facePosition.y}px`,
          cursor: "url('/fist.cur'), auto",
        }}
      />

      {/* Floating +1 effect */}
      {hits.map((hit) => (
        <div
          key={hit.id}
          className="absolute text-orange-400 text-lg font-bold animate-ping"
          style={{
            left: hit.x,
            top: hit.y,
            transform: "translate(-50%, -50%)",
            opacity: 0.9,
          }}
        >
          +1 💥
        </div>
      ))}

      <div className="absolute bottom-6 text-sm text-gray-500">
        Click the floating face to score points!
      </div>
    </main>
  );
}
