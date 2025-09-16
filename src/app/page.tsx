"use client";

import { useEffect, useState } from "react";

export default function ComingSoon() {
  const [dots, setDots] = useState(".");

  // Animate the dots "..." after Coming Soon
  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length === 3 ? "." : prev + "."));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-neutral-900 text-gray-100">
      <h1 className="text-4xl sm:text-6xl font-bold mb-4 animate-pulse">
        🚧 Portfolio Under Construction 🚧
      </h1>
      <p className="text-lg sm:text-2xl text-gray-400">
        Something awesome is coming soon{dots}
      </p>
      <p className="mt-6 text-sm text-gray-500">
        Stay tuned. The best is yet to come. 🚀
      </p>
    </main>
  );
}
