import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * 3D extruded GitHub-contribution bar-scape.
 * Auto-rotates slowly, parallax on pointer move, disabled for reduced motion.
 */
export default function CommitScape() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 200);
    camera.position.set(0, 18, 26);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const COLS = 34;
    const ROWS = 9;
    const GAP = 0.92;
    const geo = new THREE.BoxGeometry(0.72, 1, 0.72);

    const gold = new THREE.Color("#FFB454");
    const teal = new THREE.Color("#5EEAD4");
    const dim = new THREE.Color("#1E2A3F");

    type Bar = { mesh: THREE.Mesh; base: number; phase: number };
    const bars: Bar[] = [];

    for (let x = 0; x < COLS; x++) {
      for (let z = 0; z < ROWS; z++) {
        // pseudo-random but deterministic "commit intensity"
        const n =
          (Math.sin(x * 12.9898 + z * 78.233) * 43758.5453) % 1;
        const r = Math.abs(n);
        const wave = 0.55 + 0.45 * Math.sin((x / COLS) * Math.PI * 2 - 0.6);
        const intensity = Math.pow(r, 1.7) * wave;
        const h = 0.25 + intensity * 6.5;

        const color =
          intensity < 0.12
            ? dim
            : dim.clone().lerp(intensity > 0.55 ? teal : gold, Math.min(1, intensity * 1.5));

        const mat = new THREE.MeshStandardMaterial({
          color,
          roughness: 0.42,
          metalness: 0.25,
          emissive: color.clone().multiplyScalar(intensity > 0.12 ? 0.22 : 0.02),
        });
        const mesh = new THREE.Mesh(geo, mat);
        mesh.position.set((x - COLS / 2) * GAP, h / 2, (z - ROWS / 2) * GAP);
        mesh.scale.y = h;
        group.add(mesh);
        bars.push({ mesh, base: h, phase: x * 0.28 + z * 0.5 });
      }
    }

    scene.add(new THREE.AmbientLight(0xffffff, 0.45));
    const key = new THREE.DirectionalLight(0xffd9a0, 1.5);
    key.position.set(10, 20, 12);
    scene.add(key);
    const rim = new THREE.DirectionalLight(0x5eead4, 0.9);
    rim.position.set(-14, 8, -10);
    scene.add(rim);

    let target = { x: 0, y: 0 };
    let cur = { x: 0, y: 0 };
    const onMove = (e: PointerEvent) => {
      target.x = (e.clientX / window.innerWidth - 0.5) * 2;
      target.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    if (!reduced) window.addEventListener("pointermove", onMove);

    const resize = () => {
      const { clientWidth: w, clientHeight: h } = mount;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.fov = w < 700 ? 52 : 38;
      camera.updateProjectionMatrix();
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(mount);

    let raf = 0;
    const clock = new THREE.Clock();
    const render = () => {
      const t = clock.getElapsedTime();
      if (!reduced) {
        group.rotation.y = t * 0.08;
        cur.x += (target.x - cur.x) * 0.05;
        cur.y += (target.y - cur.y) * 0.05;
        group.rotation.z = cur.x * 0.05;
        camera.position.y = 18 + cur.y * -3;
        camera.position.x = cur.x * 3;
        camera.lookAt(0, 1, 0);
        for (const b of bars) {
          const s = b.base * (1 + Math.sin(t * 1.1 + b.phase) * 0.12);
          b.mesh.scale.y = s;
          b.mesh.position.y = s / 2;
        }
      } else {
        group.rotation.y = 0.5;
      }
      renderer.render(scene, camera);
      raf = requestAnimationFrame(render);
    };
    render();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("pointermove", onMove);
      geo.dispose();
      bars.forEach((b) => (b.mesh.material as THREE.Material).dispose());
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0" aria-hidden="true" />;
}
