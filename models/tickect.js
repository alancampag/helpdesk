module.exports = (mongoose) => {
    let schema = mongoose.Schema(
        {
            titulo: String,
            email: String,
            categoria: String,
            descricao: String,
            resolvido: Boolean,
        },
        {
            timestamps: true,
        }
    );

    schema.method("toJSON", function () {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const Ticket = mongoose.model("ticket", schema);

    return Ticket;
};
