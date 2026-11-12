export const figures = {
  "membrane-water-channel": {
    "src": "/images/research/membrane-water-channel-800.webp",
    "full": "/images/research/membrane-water-channel-full.webp",
    "width": 2400,
    "height": 1600,
    "smallWidth": 800,
    "caption": "A water-filled channel through a lipid membrane.",
    "alt": "Molecular rendering of a lipid membrane with water molecules extending through a central channel."
  },
  "protein-small-molecule": {
    "src": "/images/research/protein-small-molecule-800.webp",
    "full": "/images/research/protein-small-molecule-full.webp",
    "width": 2400,
    "height": 1075,
    "smallWidth": 800,
    "caption": "A small molecule within a protein structure.",
    "alt": "Ribbon representation of a protein with a small molecule and labelled residues K102, G61 and E45."
  },
  "transport-model": {
    "src": "/images/research/transport-model-800.webp",
    "full": "/images/research/transport-model-full.webp",
    "width": 2400,
    "height": 911,
    "smallWidth": 800,
    "caption": "Transport-model geometry with a pore that narrows over time.",
    "alt": "Schematic of a vesicle transport model with magnified views of a narrowing membrane pore."
  },
  "transport-near-pore": {
    "src": "/images/research/transport-near-pore-800.webp",
    "full": "/images/research/transport-near-pore-full.webp",
    "width": 1430,
    "height": 1589,
    "smallWidth": 720,
    "caption": "Simulated transport near a membrane opening over time.",
    "alt": "Full-vesicle and enlarged pore-region plots at successive times, with a minimum-to-maximum colour scale."
  },
  "transport-comsol": {
    "src": "/images/research/transport-comsol-800.webp",
    "full": "/images/research/transport-comsol-full.webp",
    "width": 1430,
    "height": 748,
    "smallWidth": 800,
    "caption": "COMSOL transport maps for calcein, TRD-3K and TRD-10K.",
    "alt": "Three rows of time-dependent COMSOL maps comparing calcein, TRD-3K and TRD-10K transport."
  }
} as const;
export type FigureId = keyof typeof figures;
