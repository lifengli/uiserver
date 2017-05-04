import express from 'express';
import {inParam, exParam} from '../data/error';
import {getAdmin, getUser, getUsers, getInvalidUser} from '../data/user';

const router = express.Router();

function sendUsers(req, res, next) {
  try {
    const query = req.query;
    let uid = false;
    let max = 0;

    res.setHeader('Content-Type', 'application/json');

    Object.keys(query).forEach((key) => {
      if (!query.hasOwnProperty(key)) return;

      max += 1;

      if (key === 'id') {
        uid = true;
      }
    });

    if (max > 1) {
      res.send(JSON.stringify(exParam()));
      return;
    }

    if (uid) {
      if (!getUser(req.query.id)) {
        res.send(JSON.stringify(getInvalidUser()));
      }
      else {
        res.send(JSON.stringify(getUser(req.query.id)));
      }
    }
    else if (max === 1) {
      res.send(JSON.stringify(inParam()));
    }
    else {
      res.send(JSON.stringify(getUsers()));
    }
  }
  catch (error) {
    next(error);
  }
}

function sendAdmin(req, res) {
  // check parameters for this query?
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(getAdmin()));
}

router.get('/', sendUsers);
router.get('/admin', sendAdmin);

module.exports = router;
