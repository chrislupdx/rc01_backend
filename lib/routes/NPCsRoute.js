const { Router } = require('express');
const NPC = require('../models/NPCs');

module.exports = Router()
  .post('/', (req, res, next) => {
    const { name } = req.body;
    NPC
      .create({ name })
      .then(npc => res.send(npc))
      .catch(next);
  })
;
