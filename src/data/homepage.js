import express from 'express';

const router = express.Router();

export class PageData extends Object {
}

const homepageItems = [
  new PageData({
    id: '1',
    name: 'Navigation',
    items: ['breadcrumbs', 'tree', 'wizard']
  }),
  new PageData({
    id: '2',
    name: 'Layout',
    items: ['card', 'sidebar', 'topnav']
  }),
  new PageData({
    id: '3',
    name: 'Container',
    items: ['grid', 'popover', 'tab']
  }),
  new PageData({
    id: '4',
    name: 'Misc',
    items: ['ellipsis', 'flyout', 'loading']
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
