import { photos } from './photos';

type Photo = (typeof photos)[keyof typeof photos][number];
function select(items: readonly Photo[], slugs: string[]) {
  return slugs.map(slug => {
    const photo = items.find(item => item.slug === slug);
    if (!photo) throw new Error(`Missing gallery photo: ${slug}`);
    return photo;
  });
}

export const photographyAlbums = [
  { id: 'nature', title: 'Nature & small details', description: 'Reflections, leaves and the small subjects that invite a closer look.', items: select(photos.photography, ['tree-and-sky', 'water-and-reflections', 'caterpillar', 'moth-and-mesh', 'flowers']) },
  { id: 'street', title: 'Streets, objects & architecture', description: 'Everyday scenes, built forms and patterns.', items: select(photos.photography, ['street-afternoon', 'shop-window', 'tree-and-building', 'bridge-lines']) },
  { id: 'sky', title: 'Sky & changing light', description: 'Clouds from above, moonlight through trees and the city at dusk.', items: select(photos.photography, ['above-clouds', 'moon-and-clouds', 'rooftop-dusk']) },
];

export const academicAlbums = [
  { id: 'mbl', title: 'MBL · Research & training', description: 'Computational work, microscopy and practical training.', items: photos.mbl },
  { id: 'karl', title: 'KARL · Collaboration & team', description: 'Research presentations and the people around the work.', items: photos.karl },
  { id: 'sakura', title: 'Sakura Science exchange', description: 'Presentations, laboratory and library visits, scientific discussions and completion of the exchange.', items: select(photos.sakura, ['exchange-presentation', 'exchange-discussion', 'exchange-lab-visit', 'kogakuin-library', 'exchange-group', 'exchange-certificate']) },
  { id: 'awards', title: 'Conference awards', description: 'Recognition for paper and poster presentations.', items: select(photos.conferences, ['best-paper-award', 'best-poster-award']) },
  { id: 'presentations', title: 'Talks & poster discussions', description: 'Sharing research through presentations and conversation.', items: select(photos.conferences, ['poster-discussion', 'physics-talk', 'ttm-presentation']) },
  { id: 'community', title: 'Research community', description: 'Conference colleagues and a Think Tank Meeting discussion.', items: select(photos.conferences, ['conference-community', 'ttm-discussion']) },
];
