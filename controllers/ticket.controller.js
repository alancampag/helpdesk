const db = require("../models");

const Ticket = db.ticket;

exports.create = (req, res) => {
    const ticket = new Ticket({
        titulo: req.body.titulo,
        email: req.body.email,
        categoria: req.body.categoria,
        descricao: req.body.descricao,
        resolvido: req.body.resolvido,
    });

    ticket
        .save(ticket)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Algum erro ao criar o ticket",
            });
        });
};

exports.findAll = (req, res) => {
    Ticket.find({})
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "algum erro ao encontrar todos os tickets.",
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    console.log(req.params.id);

    Ticket.findOneAndDelete(id)
        .then((data) => {
            if (!data) {
                res.status(404).send({
                    message: `Não foi possivel deletar o ticket com o id=${id}. Talvez o ticket não foi encontrado`,
                });
            } else {
                res.send({
                    message: "Ticket deletado com sucesso!",
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message ||
                    "Não foi possivel deletar o ticket com o id: " + id,
            });
        });
};

exports.deleteAll = (req, res) => {
    Ticket.deleteMany({})
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message ||
                    "Algum erro ocorreu ao tentar deletar os tickets",
            });
        });
};
