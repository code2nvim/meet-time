import { useEffect, useState } from "react";

interface Position {
  x: number;
  y: number;
}

export function usePosition() {
  const [position, setPosition] = useState({ x: 1, y: 1 } as Position);

  useEffect(() => {
    const update = (event: MouseEvent) => {
      const { innerWidth, innerHeight } = window;

      const x = (event.clientX - innerWidth / 2) / (innerWidth / 2) * 0.1;
      const y = (event.clientY - innerHeight / 2) / (innerHeight / 2) * 0.1;

      setPosition({ x, y });
    };

    addEventListener("mousemove", update);

    return () => removeEventListener("mousemove", update);
  }, []);

  return position;
}
