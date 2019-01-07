const app = require("express")();
const raz = require("raz");
raz.setup(app, { register: true });

app.set("views", "views/error-handling/");

app.get('/', (req, res) => {
    res.render("index");
});

raz.handleErrors(app);

const port = 1337;
app.listen(port, () => {
    console.log("Server is up on port " + port);
})
.on("error", (err) => {
    console.log("Error starting server: " + err.message);
});