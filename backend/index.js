const express = require("express");
const app = express();
app.use(express.json())
const cors = require('cors')
app.use(cors());
const port = process.env.PORT||3000


  
const apiRouter = require("./routes/index")

app.use('/api/v1',apiRouter)

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})

