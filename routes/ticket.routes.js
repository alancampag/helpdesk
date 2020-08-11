module.exports = app => {
    const Ticket = require('../controllers/ticket.controller');

    const router = require('express').Router();

    router.get('/', Ticket.findAll);

    router.post('/', Ticket.create);

    router.delete('/:id', Ticket.delete);

    router.delete('/', Ticket.deleteAll);

    app.use('/api/ticket', router);
};