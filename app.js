const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const db = require("./models");

// app.use(cors());
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

app.use(express.static("frontend"));

db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Conectado ao banco.");
    })
    .catch((err) => {
        console.log("Falha ao conectar ao banco.", err);
        process.exit();
    });

require("./routes/ticket.routes")(app);

app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "frontend", "index.html"));
});

const port = 3000;
app.listen(port, () =>
    console.log(`app listening at http://localhost:${port}`)
);
