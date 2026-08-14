import { useEffect, useRef, useState } from "react";

type Tag = { label: string; x: number; y: number; z: number };

/** Lightweight 3D rotating tag-sphere (no WebGL) — projects skill tags on a sphere. */
export function SkillSphere({ items }: { items: string[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [tags, setTags] = useState<Tag[]>([]);
  const drag = useRef({ vx: 0.0016, vy: 0.0007, ax: 0, ay: 0, active: false, px: 0, py: 0 });

  useEffect(() => {
    const n = items.length;
    setTags(
      items.map((label, i) => {
        const phi = Math.acos(-1 + (2 * i + 1) / n);
        const theta = Math.sqrt(n * Math.PI) * phi;
        return {
          label,
          x: Math.cos(theta) * Math.sin(phi),
          y: Math.sin(theta) * Math.sin(phi),
          z: Math.cos(phi),
        };
      }),
    );
  }, [items]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    const state = drag.current;

    const frame = () => {
      if (!reduced && !state.active) {
        state.ay += state.vx;
        state.ax += state.vy;
      }
      const cosY = Math.cos(state.ay),
        sinY = Math.sin(state.ay),
        cosX = Math.cos(state.ax),
        sinX = Math.sin(state.ax);
      const r = Math.min(el.clientWidth, el.clientHeight) / 2 - 34;
      const nodes = el.querySelectorAll<HTMLSpanElement>("[data-tag]");
      nodes.forEach((node, i) => {
        const t = tags[i];
        if (!t) return;
        const x1 = t.x * cosY - t.z * sinY;
        const z1 = t.x * sinY + t.z * cosY;
        const y2 = t.y * cosX - z1 * sinX;
        const z2 = t.y * sinX + z1 * cosX;
        const scale = 0.62 + (z2 + 1) * 0.29;
        node.style.transform = `translate3d(${x1 * r}px, ${y2 * r}px, 0) scale(${scale})`;
        node.style.opacity = String(0.35 + (z2 + 1) * 0.32);
        node.style.zIndex = String(Math.round((z2 + 1) * 100));
      });
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);

    const down = (e: PointerEvent) => {
      state.active = true;
      state.px = e.clientX;
      state.py = e.clientY;
    };
    const move = (e: PointerEvent) => {
      if (!state.active) return;
      state.ay += (e.clientX - state.px) * 0.005;
      state.ax -= (e.clientY - state.py) * 0.005;
      state.px = e.clientX;
      state.py = e.clientY;
    };
    const up = () => {
      state.active = false;
    };
    el.addEventListener("pointerdown", down);
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("pointerdown", down);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
  }, [tags]);

  return (
    <div
      ref={ref}
      className="relative mx-auto aspect-square w-full max-w-[560px] cursor-grab touch-none select-none active:cursor-grabbing"
    >
      <div className="absolute inset-[12%] rounded-full bg-primary/10 blur-2xl" aria-hidden="true" />
      {tags.map((t) => (
        <span
          key={t.label}
          data-tag
          className="absolute left-1/2 top-1/2 -ml-[0px] whitespace-nowrap rounded-full border border-ink-foreground/15 bg-ink-foreground/[0.07] px-3 py-1 text-[0.72rem] font-medium text-ink-foreground"
          style={{ marginLeft: 0, willChange: "transform" }}
        >
          {t.label}
        </span>
      ))}
    </div>
  );
}
