const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database");
const errorMiddleware = require("./middleware/error");

// config
dotenv.config({ path: "backend/config/config.env" });

connectDatabase();

const port = process.env.PORT;

// middleware for error
app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`server is running on  http://localhost:${port}`);
});
