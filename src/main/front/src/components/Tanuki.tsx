import { useState } from "react";

interface Line {
  from: number;
  height: number;
}

interface LinesProps {
  lines: Line[];
}

export function Lines({ lines }: LinesProps) {
  return (
    <div className="flex h-95 flex-col-reverse text-sm">
      {lines.map(({ from, height }, key) => (
        <span
          className="w-3 rounded-full bg-white"
          style={{
            marginBottom: `calc(var(--spacing) * ${from})`,
            height: `calc(var(--spacing) * ${height})`,
          }}
          key={key}
        />
      ))}
    </div>
  );
}

/*
 * TODO: change height dynamic
 */
export function Tanuki() {
  const [height, setHeight] = useState(95);

  const lines: Line[][] = [
    [{ from: height * 0, height: height * 0.35 }],
    [{ from: height * 0, height: height * 0.55 }],
    [
      { from: height * 0, height: height * 0.27 },
      { from: height * 0.1, height: height * 0.3 },
      { from: height * 0.05, height: height * 0.15 },
    ],
    [
      { from: height * 0, height: height * 0.13 },
      { from: height * 0.29, height: height * 0.58 },
    ],
    [
      { from: height * 0, height: height * 0.05 },
      { from: height * 0.46, height: height * 0.49 },
    ],
    [{ from: height * 0.6, height: height * 0.38 }],
    [{ from: height * 0.66, height: height * 0.29 }],
    [{ from: height * 0.68, height: height * 0.3 }],
    [
      { from: height * 0.11, height: height * 0.2 },
      { from: height * 0.31, height: height * 0.29 },
    ],
    [
      { from: height * 0.04, height: height * 0.37 },
      { from: height * 0.04, height: height * 0.3 },
      { from: height * 0.04, height: height * 0.18 },
    ],
    [
      { from: height * 0, height: height * 0.2 },
      { from: height * 0.18, height: height * 0.3 },
      { from: height * 0.02, height: height * 0.3 },
    ],
  ];

  const mirror = lines.slice().reverse();

  return (
    <section className="flex aspect-4/3 w-11/12 items-center justify-center gap-3.5">
      {lines.map((elem, key) => <Lines key={key} lines={elem} />)}
      {mirror.map((elem, key) => <Lines key={key} lines={elem} />)}
    </section>
  );
}
