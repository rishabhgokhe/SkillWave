import app from "./app.js";
import dbConnection from "./Config/dataBase.js";

//set up connection with mongo database
dbConnection();

app.listen(process.env.PORT, () => {
    console.log(`Server Running on port ${process.env.PORT}`);
})