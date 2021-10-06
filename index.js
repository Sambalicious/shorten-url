require("dotenv").config();

const app = require("express")();


require('./start/db')()
require('./start/routes')(app);

const port = process.env.PORT || 8080;


app.listen(port, async ()=>{
    console.log("App listening on "+ port)
})