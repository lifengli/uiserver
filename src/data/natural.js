import express from 'express';

const router = express.Router();

export class naturalData extends Object {
}

const naturalItems = [
  new naturalData({
    id: '1',
    name: 'tour',
    items: ['/images/natural/grand-canyon/canyon-tour.jpg', '/images/natural/grand-canyon/canyon-lake.jpg']
  }),
  new naturalData({
    id: '2',
    name: 'canyon',
    items: ['/images/natural/grand-canyon/grand-canyon2.jpg']
  })
];

const naturaldataMap = {};

naturalItems.forEach(item => {
  naturaldataMap[item.id] = item;
});

router.get('/', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(naturalItems));
});

export default router;
