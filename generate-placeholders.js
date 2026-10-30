const fs = require('fs');
const path = require('path');

const dir = path.join(process.cwd(), 'public', 'images', 'projects');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

function createSvg(title, subtitle, accentColor = '#C47935', bgColor = '#F8F3E9') {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="100%" height="100%">
  <defs>
    <pattern id="grid-${title.replace(/[^a-zA-Z0-9]/g, '')}" width="24" height="24" patternUnits="userSpaceOnUse">
      <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#E2D4BE" stroke-width="0.9" opacity="0.6" />
    </pattern>
    <linearGradient id="grad-${title.replace(/[^a-zA-Z0-9]/g, '')}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${bgColor}" />
      <stop offset="100%" stop-color="#ECE0CD" />
    </linearGradient>
  </defs>
  <rect width="800" height="500" rx="16" fill="url(#grad-${title.replace(/[^a-zA-Z0-9]/g, '')})" />
  <rect width="800" height="500" fill="url(#grid-${title.replace(/[^a-zA-Z0-9]/g, '')})" />
  <rect x="16" y="16" width="768" height="468" rx="12" fill="none" stroke="#D3BF9E" stroke-width="1.5" stroke-dasharray="6,6" opacity="0.75" />
  
  <g transform="translate(36, 36)">
    <rect width="170" height="28" rx="14" fill="#2A1810" />
    <text x="16" y="18" fill="#F6EEDD" font-family="system-ui, sans-serif" font-size="11" font-weight="700" letter-spacing="0.8">PHOTO PLACEHOLDER</text>
  </g>

  <g transform="translate(400, 210)">
    <circle r="90" fill="none" stroke="${accentColor}" stroke-width="1.5" opacity="0.3" stroke-dasharray="4,4" />
    <circle r="68" fill="none" stroke="#59331E" stroke-width="1.5" opacity="0.35" />
    <circle r="48" fill="#FCFAF6" stroke="#2A1810" stroke-width="2" />
    
    <path d="M -18 -18 L 18 18 M -18 18 L 18 -18" stroke="${accentColor}" stroke-width="3" stroke-linecap="round" />
    <circle r="10" fill="${accentColor}" />
    <circle r="4" fill="#FFFFFF" />
  </g>

  <g transform="translate(400, 365)">
    <text text-anchor="middle" y="0" fill="#2A1810" font-family="Georgia, serif" font-size="22" font-weight="bold">${title}</text>
    <text text-anchor="middle" y="26" fill="#59331E" font-family="system-ui, sans-serif" font-size="14" font-weight="500">${subtitle}</text>
    <text text-anchor="middle" y="48" fill="#8A6044" font-family="system-ui, sans-serif" font-size="12" letter-spacing="0.5">Click to view &amp; expand gallery</text>
  </g>
</svg>`;
}

const files = [
  { name: 'project1-1.svg', title: 'Autonomous Inspection Rover', subtitle: 'Assembled Rover with Custom Modular Sensor Deck' },
  { name: 'project1-2.svg', title: 'CAD Model & FEA Analysis', subtitle: 'Onshape Mechanical Drive Assembly' },
  { name: 'project1-3.svg', title: 'Wiring & Electronics Benchtop', subtitle: 'Custom Motor Driver Harness & Telemetry' },

  { name: 'project2-1.svg', title: 'Precision Marking Gauge', subtitle: 'Handcrafted Brass & Reclaimed Walnut' },
  { name: 'project2-2.svg', title: 'Lathe Turning & Single-Point Threading', subtitle: 'Manual Lathe Machining Setup' },
  { name: 'project2-3.svg', title: 'Exploded View & Drawings', subtitle: 'Micro-Adjust Mechanism Tolerancing' },

  { name: 'project3-1.svg', title: 'Off-Road Suspension Linkage', subtitle: 'CNC-Cut & Milled Control Arm Assembly' },
  { name: 'project3-2.svg', title: 'Finite Element Stress Simulation', subtitle: 'Bump & Torsional Load Analysis' },
  { name: 'project3-3.svg', title: 'Welding Jig & Inspection', subtitle: 'Precision Alignment Fixture Verification' }
];

files.forEach(f => {
  fs.writeFileSync(path.join(dir, f.name), createSvg(f.title, f.subtitle));
});

console.log('Successfully wrote all 9 SVG files');
