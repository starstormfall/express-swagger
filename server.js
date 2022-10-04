const express = require("express");

const bodyParser = require("body-parser");
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger_output.json");

const PORT = process.env.PORT || 3000;
const app = express();
app.use(bodyParser.json());

const routes = require("./routes");
const catRoutes = require("./routes/cat");
const dogRoutes = require("./routes/dog");
app.use("/api", routes);
app.use("/cat", catRoutes);
app.use("/dog", dogRoutes);

app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
