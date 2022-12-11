import { useState, useEffect } from "react";

export default function useMousePosition() {
  const hasWindow = typeof window !== "undefined";
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    if (hasWindow) {
      const handlePositionChange = (e: MouseEvent) => {
        setMousePosition({
          x: e.clientX,
          y: e.clientY,
        });
      };

      window.addEventListener("mousemove", handlePositionChange);
      return () =>
        window.removeEventListener("mousemove", handlePositionChange);
    }
  }, [hasWindow]);

  return mousePosition;
}
