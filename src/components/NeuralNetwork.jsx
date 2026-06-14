import { useEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "../lib/gsap";

const W = 480;
const H = 420;
const CX = W / 2;
const CY = H / 2;

// Nodos: núcleo central + periféricos
const NODES = [
  { x: CX, y: CY, r: 9, core: true },
  { x: CX - 150, y: CY - 110, r: 6 },
  { x: CX + 140, y: CY - 130, r: 5 },
  { x: CX + 170, y: CY - 10, r: 6 },
  { x: CX + 120, y: CY + 120, r: 5 },
  { x: CX - 30, y: CY + 160, r: 6 },
  { x: CX - 160, y: CY + 90, r: 5 },
  { x: CX - 185, y: CY - 20, r: 6 },
  { x: CX - 70, y: CY - 60, r: 4 },
  { x: CX + 70, y: CY + 40, r: 4 },
  { x: CX + 40, y: CY - 90, r: 4 },
  { x: CX - 90, y: CY + 70, r: 4 },
];

// Conexiones: cada periférico al núcleo + algunas cruzadas
const LINKS = [
  ...NODES.map((_, i) => [0, i]).slice(1),
  [1, 8], [2, 10], [3, 9], [4, 9], [5, 11], [6, 11], [7, 8], [8, 10],
];

export default function NeuralNetwork() {
  const svgRef = useRef(null);

  // Pulsos viajeros a lo largo de las primeras conexiones (GSAP)
  useEffect(() => {
    if (prefersReducedMotion) return;
    const svg = svgRef.current;
    if (!svg) return;

    const ctx = gsap.context(() => {
      LINKS.slice(0, 6).forEach(([a, b], idx) => {
        const pulse = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        pulse.setAttribute("r", "2.5");
        pulse.setAttribute("class", "neural__node--core");
        svg.appendChild(pulse);
        gsap.fromTo(
          pulse,
          { attr: { cx: NODES[b].x, cy: NODES[b].y }, opacity: 0 },
          {
            attr: { cx: NODES[a].x, cy: NODES[a].y },
            opacity: 1,
            duration: 1.6,
            repeat: -1,
            delay: idx * 0.5,
            ease: "power1.inOut",
            yoyo: true,
          }
        );
      });
    }, svgRef);

    return () => ctx.revert();
  }, []);

  return (
    <svg
      ref={svgRef}
      className="neural"
      viewBox={`0 0 ${W} ${H}`}
      role="img"
      aria-label="Red neuronal animada"
    >
      {/* Halo difuso del núcleo */}
      <circle cx={CX} cy={CY} r={120} className="neural__halo" />

      {/* Conexiones */}
      {LINKS.map(([a, b], i) => (
        <line
          key={`l${i}`}
          x1={NODES[a].x}
          y1={NODES[a].y}
          x2={NODES[b].x}
          y2={NODES[b].y}
          className="neural__link"
        />
      ))}

      {/* Nodos pulsantes (animación CSS con delay escalonado) */}
      {NODES.map((n, i) => (
        <circle
          key={`n${i}`}
          cx={n.x}
          cy={n.y}
          r={n.r}
          className={"neural__node" + (n.core ? " neural__node--core" : "")}
          style={{
            animation: `nodePulse ${(2.4 + (i % 4) * 0.4).toFixed(2)}s ease-in-out ${(
              i * 0.35
            ).toFixed(2)}s infinite`,
          }}
        />
      ))}
    </svg>
  );
}
