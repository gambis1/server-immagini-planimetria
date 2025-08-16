var express = require("express");
var app = express();
app.use(express.static("public"));
var path = require("path");

const cors = require("cors");
const corsOptions = {
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

app.get("/image/:imageName", (req, res) => {
  const imageName = req.params.imageName;
  const imagePath = path.resolve(__dirname, "immagini", imageName);
  res.sendFile(imagePath, (err) => {
    if (err) {
      console.error("Errore invio file:", err);
      res.status(404).send("Immagine non trovata");
    }
  });
});

// Create a Server
const PORT = process.env.PORT || 4000;
var server = app.listen(PORT, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("App listening at http://%s:%s", host, port);
});
