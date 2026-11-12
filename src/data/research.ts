import { publications } from './publications';
import type { FigureId } from './figures';

export const researchThemes = [
  {
    id: 'permeabilization', number: '01', title: 'Membrane permeabilization',
    question: 'How do membranes become permeable, and what controls the lifetime of a pore?',
    description: 'I investigate the molecular changes that open pathways through lipid membranes. My electroporation studies examine pore hydration and lipid reorganization, and show how the timing of successive electric pulses can influence pore size and persistence.',
    ongoing: 'I am extending this question to permeabilization driven by small molecules and their interactions with the membrane.',
    papers: ['electroporation', 'molecular-transport'],
    links: [{ label: 'Pulse modulation study', href: '/research/electroporation/' }],
    visual: 'membrane-water-channel' as FigureId,
  },
  {
    id: 'transport', number: '02', title: 'Transport across permeabilized membranes',
    question: 'What determines how much of a molecule crosses a membrane, and where it accumulates?',
    description: 'I connect molecular pore structure with quantitative models of diffusion. Across lipid bilayers, giant unilamellar vesicles and multivesicular systems, my work examines how molecular size, pore geometry and compartmentalization shape transport rates and spatial distributions. These model membranes help us understand physical constraints on intracellular delivery.',
    ongoing: null,
    papers: ['molecular-transport', 'multivesicular-vesicles', 'multipore-transport'],
    links: [{ label: 'Molecular dynamics & diffusion study', href: '/research/molecular-transport/' }, { label: 'All transport publications', href: '/publications/?theme=transport' }],
    visual: 'transport-model' as FigureId,
  },
  {
    id: 'protein-interactions', number: '03', title: 'Protein–small-molecule interactions',
    question: 'How does small-molecule binding change protein behavior and biological function?',
    description: 'I investigate how small molecules interact with proteins and how those interactions may influence structure, dynamics and function. My STAR Protocols publication provides a virtual-screening workflow, semdock, that prepares user-supplied chemical libraries and prioritizes candidate interactions for further study.',
    ongoing: 'Current work examines small-molecule effects on protein behavior in the context of autophagy and cancer. The aim is to connect molecular interactions with biological function.',
    papers: ['semdock'],
    links: [{ label: 'Read about the screening workflow', href: '/research/semdock/' }, { label: 'Explore the software', href: '/software/' }],
    visual: 'protein-small-molecule' as FigureId,
  },
];

export function papersFor(ids: string[]) {
  return ids.map(id => {
    const paper = publications.find(p => p.id === id);
    if (!paper) throw new Error(`Unknown publication: ${id}`);
    return paper;
  });
}
