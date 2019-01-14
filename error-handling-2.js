const app = require("express")();

const raz = require("raz")
raz.register(app);

app.set("views", "views/error-handling/");

app.get('/', (req, res) => {
    res.render("index");
});

app.use((err, req, res, next) => {
    if (res.headersSent)
        return next(err); // must

    var env = app.get('env');

    if (env !== "production" && err.isRazorError) {
        var errorHtml = err.html();
        res.status(500);
        res.send(errorHtml);
        return;
    }
    
    return next(err);
});

const port = 1337;
app.listen(port, () => {
    console.log("Server is up on port " + port);
})
.on("error", (err) => {
    console.log("Error starting server: " + err.message);
});