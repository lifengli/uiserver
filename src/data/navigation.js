import express from 'express';

const router = express.Router();

export class navigationData extends Object {
}

const navigationItems = [
  new navigationData({
    id: '1',
    name: 'animals',
    items: ['/images/navigation/amazon-forest/water-dolphin.jpg', '/images/navigation/amazon-forest/jaguar.jpg']
  }),
  new navigationData({
    id: '2',
    name: 'plants',
    items: ['/images/navigation/amazon-forest/heliconia-flower.jpg', '/images/navigation/amazon-forest/giant-water-lily.jpg']
  })
];

const navigationdataMap = {};

navigationItems.forEach(item => {
  navigationdataMap[item.id] = item;
});

router.get('/', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(navigationItems));
});

export default router;
