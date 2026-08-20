import app from "./src/app.js";
import { ConnectDB } from "./src/config/db.config.js";

ConnectDB()

const port = process.env.PORT || 3000
app.listen(port, ()=>{
    console.log(`server in running on ${port}`)
})