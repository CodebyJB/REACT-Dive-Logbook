// server.js

const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 9000;

// Erlaube allen Ursprüngen (können Sie spezifizieren, welche Domänen erlaubt sind, wenn gewünscht)
app.use(cors());

// Hier können Sie Ihren restlichen Servercode hinzufügen...

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
