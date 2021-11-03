const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database");
const errorMiddleware = require("./middleware/error");

// config
dotenv.config({ path: "backend/config/config.env" });

connectDatabase();

// handling uncaught exception

process.on('uncaughtException',(err)=>{
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Unhandled Promise Rejection`);

  Server.close(()=>{
    process.exit(1);
  }) 
})

const port = process.env.PORT;

// middleware for error
app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`server is running on  http://localhost:${port}`);
});

// unhandled promise rejection like mongodb connnection without catch block
process.on('unhandledRejection',(err)=>{
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Unhandled Promise Rejection`);

  Server.close(()=>{
    process.exit(1);
  }) 
})