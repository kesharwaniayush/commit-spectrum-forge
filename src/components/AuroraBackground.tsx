export function AuroraBackground() {
  return (
    <div className="aurora-root" aria-hidden="true">
      <div className="aurora-blade aurora-blade-1" />
      <div className="aurora-blade aurora-blade-2" />
      <div className="aurora-blade aurora-blade-3" />
      <div className="aurora-blade aurora-blade-4" />
      <div className="aurora-bloom" />
      <svg className="aurora-grain-svg">
        <filter id="aurora-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#aurora-grain)" />
      </svg>
      <div className="aurora-vignette" />
    </div>
  );
}
