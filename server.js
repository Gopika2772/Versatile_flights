const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const AdminRouter = require("./routes/admin.rotes");
const UserRouter = require("./routes/user.routes");

const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

const PORT = 8080;

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
})