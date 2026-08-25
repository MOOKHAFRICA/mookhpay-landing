// Salimia organic shapes — solid pastel fills, never outlined, never gradient.
// One shape per surface; rotate in 15° steps; bleed at large sizes.
const FILLS = {
  green: "#CDE3B7",
  orange: "#F5B894",
  blue: "#BFE0E2",
  lilac: "#D9C5E8",
  yellow: "#F5E1A4",
  pink: "#F2A2C0",
  cream: "#F4E9C4",
};

function starPath(W, H, k = 0.42) {
  const cx = W / 2;
  const cy = H / 2;
  const tx = cx;
  const ty = k * cy;
  const rx = W - k * (W - cx);
  const ry = cy;
  const bx = cx;
  const by = H - k * cy;
  const lx = k * cx;
  const ly = cy;
  return (
    `M ${cx},0 C ${tx},${ty} ${rx},${ry} ${W},${cy} ` +
    `C ${rx},${ry} ${bx},${by} ${cx},${H} ` +
    `C ${bx},${by} ${lx},${ly} 0,${cy} ` +
    `C ${lx},${ly} ${tx},${ty} ${cx},0 Z`
  );
}

export default function Shape({
  shape = "star",
  w = 505,
  h = 502,
  fill = "green",
  className = "",
  style,
}) {
  const f = FILLS[fill] || fill;
  let inner;
  if (shape === "star") {
    inner = <path d={starPath(w, h)} fill={f} />;
  } else if (shape === "ellipse") {
    inner = <ellipse cx={w / 2} cy={h / 2} rx={w / 2} ry={h / 2} fill={f} />;
  } else if (shape === "polygon") {
    inner = (
      <polygon
        points={`${w / 2},0 ${w},${h} 0,${h}`}
        fill={f}
        stroke={f}
        strokeWidth={Math.min(w, h) * 0.04}
        strokeLinejoin="round"
      />
    );
  } else {
    const r = Math.min(w, h) * 0.08;
    inner = <rect x="0" y="0" width={w} height={h} rx={r} ry={r} fill={f} />;
  }
  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
      className={className}
      style={style}
      xmlns="http://www.w3.org/2000/svg"
    >
      {inner}
    </svg>
  );
}
