import app from "./app.js";

const port = process.env.port || 3000;
// listen to server
app.listen(port, function () {
    console.log("Server listening on port " + port + "...");
});
