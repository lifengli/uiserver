import express from 'express';

const router = express.Router();

export class PageData extends Object {
}

const homepageItems = [
  new PageData({
    id: '1',
    name: 'Navigation',
    items: ['Amazon Rainforest*', 'Pacific Ocean', 'Rocky Mountain']
  }),
  new PageData({
    id: '2',
    name: 'Natural',
    items: ['Grand Canyon', 'Mount Everest', 'Victoria Falls']
  }),
  new PageData({
    id: '3',
    name: 'Technology',
    items: ['Artificial Intelligence', 'New Energy Source', 'Space Exploration']
  }),
  new PageData({
    id: '4',
    name: 'Artistic',
    items: ['Abstract Art', 'Conceptual Art', 'Impressionism']
  })
];

const pagedataMap = {};

homepageItems.forEach(item => {
  pagedataMap[item.id] = item;
});

router.get('/', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(homepageItems));
});

export default router;
