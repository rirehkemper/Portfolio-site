// Background.tsx
"use client";


export default function Background() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {/* animated gradient wash (semi-transparent for diagnostics) */}
      <div className="absolute inset-0 animate-gradient bg-[linear-gradient(120deg,#001a00cc,#003300aa,#005500aa,#003300cc)] bg-[length:400%_400%]" />

      <div
        className="absolute bottom-0 right-0 w-[85vw] h-[85vh] bg-no-repeat bg-contain opacity-90 mix-blend-screen z-50 pointer-events-none"
        style={{ backgroundImage: "url('/cubes-bg.png')", backgroundPosition: 'bottom right' }}
      />
    </div>
  );
}
