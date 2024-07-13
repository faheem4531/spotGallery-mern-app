const express = require('express');

const router = express.Router();

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Islamabad',
    description: 'my place',
    location: {
      lat: 40.3232,
      lng: 32.123
    },
    address: "kasur",
    creator: "u1"
  }
];

router.get('/:pid', (req, res, next) => {
  const placeId = req.params.pid; //{pid: 'p1}
  const place = DUMMY_PLACES.find(p => {
    return p.id === placeId;
  })
  res.json({ place });
});

router.get('/user/:uid', (req, res, next) => {
  const userId = req.params.uid;
  const place = DUMMY_PLACES.find(p => {
    return p.creator === userId;
  })
  res.json({ place });
});


module.exports = router;