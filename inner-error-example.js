const app = require("express")();
app.set('view engine', 'raz');
app.set("views", "views/example/");

app.get('/', (req, res) => {
    var people = [
        { name: "Willis Wethington", age: 42 },
        { name: "Georgie Graddy", age: 36 },
        { name: "Ileen Irizarry", age: 24},
        { name: "Arnoldo Abreu", age: 10 },
        { name: "Rosa Robb", age: 18 },
        { name: "Otelia Orman", age: 65 },
         ];
    res.render("index", { people });
});

require("raz").handleErrors(app);

const port = 1337;
app.listen(port, () => {
    console.log("Server is up on port " + port);
})
.on("error", (err) => {
    console.log("Error starting server: " + err.message);
});